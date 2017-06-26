import { TestBed, inject } from '@angular/core/testing';
import {
    HttpModule,
    XHRBackend,
    ResponseOptions,
    Response
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PostService } from './postrequest.service';

describe('PostService', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                PostService,
                { provide: XHRBackend, useClass: MockBackend },
            ]
        });
    });

    describe('postRequest()', () => {
        it('should return an Observable<Comment[]> with auth type', inject([PostService, XHRBackend], (PostService, MockBackend) => {
            const mockResponse = {
                data: {
                    type: 'auth',
                    attributes: {
                        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RBZG1pbiIsImFkbWluIjp0cnVlfQ.nhC1EDI5xLGM4yZL2VMZyvHcbcWiXM2RVS7Y8Pt0Zuk'
                    }
                }
            };
            const userDetails = {
                email: 'test@example.com',
                password: '1234'
            };

            MockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });
            PostService.postRequest(userDetails).subscribe((mockResponse) => {
                expect(mockResponse.data.type).toEqual('auth');
            });
        }));

        it('should return an Observable<Comment[]> with errors', inject([PostService, XHRBackend], (PostService, MockBackend) => {
            const falseMockResponse = {
                errors: {
                    status: 400,
                    title: 'Bad Request',
                    detail: 'Mismatched email and password'
                }
            };
            const falseUserDetails = {
                email: 'test@example.com',
                password: '123'
            };

            MockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(falseMockResponse)
                })));
            });
            PostService.postRequest(falseUserDetails).subscribe((falseMockResponse) => {
                expect(falseMockResponse.errors.status).toEqual(400);
                expect(falseMockResponse.errors.title).toEqual('Bad Request');
                expect(falseMockResponse.errors.detail).toEqual('Mismatched email and password');
            });
        }));
    });
});
