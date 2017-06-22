import { TestBed, inject } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    BaseRequestOptions,
    XHRBackend,
    ResponseOptions,
    Response,
    Headers
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PostService } from './postrequest.service';

describe('LoginService', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                LoginService,
                { provide: XHRBackend, useClass: MockBackend },
            ]
        });
    });

    describe('postLoginDetails()', () => {
        it('should return an Observable<Comment[]> with ok status', inject([LoginService, XHRBackend], (LoginService, MockBackend) => {
            const mockResponse = {
                    status: 'ok',
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RBZG1pbiIsImFkbWluIjp0cnVlfQ.nhC1EDI5xLGM4yZL2VMZyvHcbcWiXM2RVS7Y8Pt0Zuk'
                }

            const loginDetails = {
                email: 'test@example.com',
                password: '1234'
                };
            MockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });
            LoginService.postLoginDetails(loginDetails).subscribe((mockResponse) => {
                expect(mockResponse.status).toEqual('ok');
            });
        }));

        it('should return an Observable<Comment[]> with error status', inject([LoginService, XHRBackend], (LoginService, MockBackend) => {
            const falseMockResponse = {
                status: 'error'
            }

            const falseLoginDetails = {
                email: 'test@example.com',
                password: '123'
                };
            MockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(falseMockResponse)
                })));
            });
            LoginService.postLoginDetails(falseLoginDetails).subscribe((falseMockResponse) => {
                expect(falseMockResponse.status).toEqual('error');
            });
        }));
    });
});
