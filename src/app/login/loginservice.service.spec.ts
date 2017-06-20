// import { TestBed, async, inject } from '@angular/core/testing';
// import {
//     HttpModule,
//     BaseRequestOptions,
//     XHRBackend,
//     Response,
//     Headers,
//     RequestOptions
// } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';

// import { LoginService } from './loginservice.service';

// describe('LoginService', () => {
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpModule],
//             providers: [
//                 { useValue: 'http://localhost:8080/api/login/' }
//                 LoginService,
//                 { provide: XHRBackend, useClass: MockBackend }
//             ]
//         });
//     });

//     it('should be created', inject([LoginService], (service: LoginService) => {
//         expect(service).toBeTruthy();
//     }));

//     describe('postLoginDetails()', () => {
//         it('should return an Observable<Comment[]>', inject([LoginService, XHRBackend], (loginService, mockBackend) => {
//             const mockResponse = {
//                     status: 'ok',
//                     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RBZG1pbiIsImFkbWluIjp0cnVlfQ.nhC1EDI5xLGM4yZL2VMZyvHcbcWiXM2RVS7Y8Pt0Zuk'
//             }

//         mockBackend.connections.subscribe((connection) => {
//             connection.mockRespond(new Response(new ResponseOptions({
//                 body: mockResponse
//             })));
//         });

//         mockBackend.connections.subscribe((connection) => {
//             const loginDetails = {
//                 email: 'test@example.com',
//                 password: '1234'
//                 };
//             LoginService.postLoginDetails(loginDetails).subscribe((userInfo) => {
//                 expect(userInfo.length).toBe(2);
//                 expect(userInfo.status).toEqual('ok');
//             }
//         })));

//     });
// });
