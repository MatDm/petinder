// import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
//
// import {PetService} from './pet.service';
// import {TestBed} from "@angular/core/testing";
// import {firstValueFrom} from "rxjs";
// import {Pet} from "../model/Pet";
// import {HttpClient, provideHttpClient} from "@angular/common/http";
//
// describe('PetService', () => {
//     let service: PetService;
//     let httpMock: HttpTestingController;
//     const result: Pet[] = [
//         {id: 1, name: 'test 1', kind: 'cat', image: 'test_1.jpg', profileText: 'test'},
//         {id: 2, name: 'test 2', kind: 'dog', image: 'test_2.jpg', profileText: 'test'}
//     ];
//
//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//             providers: [
//                 provideHttpClient(),
//                 provideHttpClientTesting(),
//                 PetService
//             ]
//         })
//             .compileComponents()
//
//         service = TestBed.inject(PetService)
//         httpMock = TestBed.inject(HttpTestingController)
//
//     });
//
//     it('should be created', () => {
//         expect(service).toBeTruthy();
//     });
//
//     it('should get pets', () => {
//         expect(service).toBeTruthy();
//     });
//
//     it("should make a single get request and return expected", async () => {
//         const expected = firstValueFrom(service.getPets())
//         const req = httpMock.expectOne('http://localhost:8080/pets');
//         expect(req.request.method).toBe('GET')
//         //stubbing
//         req.flush(result)
//
//         expect(await expected).toEqual(result)
//
//         httpMock.verify()
//     });
// });

import {TestBed} from '@angular/core/testing';

import {PetService} from './pet.service';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {Pet} from "../model/Pet";
import {of} from "rxjs";

describe('PetService', () => {
  let service: PetService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
    service = TestBed.inject(PetService);
    httpClient = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should verify the http call', (done) => {
    // given
    const petsResult: Pet[] = [
      {id: 1, name: 'test 1', kind: 'cat', image: 'test_1.jpg', profileText: 'test'},
      {id: 2, name: 'test 2', kind: 'dog', image: 'test_2.jpg', profileText: 'test'}
    ];
    const httpClientSpy = jest
      .spyOn(httpClient, 'get')
      .mockReturnValue(of(petsResult));

    // when
    let pets = service.getPets().subscribe((pets: Pet[]) => {
      // then
      expect(httpClientSpy).toHaveBeenCalled();
      expect(pets).toEqual(petsResult);
      done();
    });
  });
});
