import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing'
import { SkillService } from './skill.service';
import { mockSkills } from './mocks/mock-skills';
import { Skill } from './skill';
import { skip, take } from 'rxjs';

fdescribe('SkillService', () => {

  let service: SkillService;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SkillService]

    });

    service = TestBed.inject(SkillService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //This test suite tests getSkills function
  //which makes the api call to get skills
  //and on getting response this fn pushes data via BehaviorSubject
  //so we should test that these behavior subjects are able to push data
  //and public part of the api also gets data so when used in template
  // with async pipe we are getting the data! and we will also check the error case!

  //Here we tested that the observables send data appropriately!
  it('should make the api call to get skills',()=>{

    service.skills$.pipe(skip(1))
    .subscribe((skills:Skill[]|null)=>{
      expect(skills).toEqual(mockSkills);
    })

    service.loading$.pipe(skip(1),take(1))
    .subscribe((loading:boolean|null)=>{
      expect(loading).toBe(true);
    })

    service.loading$.pipe(skip(2),take(1))
    .subscribe((loading:boolean|null)=>{
      expect(loading).toBe(false);
    })

    httpClient.get<Skill[]>('../../assets/skills.json').subscribe(
      {
        next:(skills:Skill[])=>{
          expect(skills).toEqual(mockSkills);
          expect(skills.length).toBe(12);
        },
        error:fail
      }
    )
    
    // The following `expectOne()` will match the request's URL.
  // If no requests or multiple requests matched that URL
  // `expectOne()` would throw.
  const req = httpTestingController.expectOne('../../assets/skills.json');

   // Assert that the request is a GET.
   expect(req.request.method).toEqual('GET');

   // Respond with mock data, causing Observable to resolve.
  // Subscribe callback asserts that correct data was returned.
  req.flush(mockSkills);

  })


  it('should make the api call to get skills, but here url is wrong so api will fail',()=>{

    const mockError="Couldn't load skills!";
    service.error$.pipe(skip(1))
    .subscribe((error:string|null)=>{
      expect(error).toBe(mockError);
    })

    httpClient.get<Skill[]>('../../assets/skillss.json').subscribe(
      {
        next:fail,
        error:(err)=>{
          console.log(err);
          expect(err.status).toEqual(404);
          expect(err.statusText).toBe("Not Found");
        }
      }
      
    )
    
    // The following `expectOne()` will match the request's URL.
  // If no requests or multiple requests matched that URL
  // `expectOne()` would throw.
  const req = httpTestingController.expectOne('../../assets/skillss.json');

   // Assert that the request is a GET.
   expect(req.request.method).toEqual('GET');

   // Respond with mock data, causing Observable to resolve.
  // Subscribe callback asserts that correct data was returned.
  req.flush(mockError,{status:404,statusText:"Not Found"});

  })


});
