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

         it('should return an Observable<Comment[]> with hotel details', inject([PostService, XHRBackend], (PostService, MockBackend) => {
            const hotelResponse = {
                links: {
                    self: 'https://your-hostname.com/hotels/1'
                },
                data: {
                    type: 'hotels',
                    id: 1,
                    attributes: {
                        location: 'Budapest',
                        name: 'Hotel Ipoly utca',
                        has_wifi: true,
                        has_parking: true,
                        has_pets: true,
                        has_restaurant: true,
                        has_bar: true,
                        has_swimming_pool: true,
                        has_air_conditioning: true,
                        has_gym: true,
                        meal_plan: 'american-plan',
                        stars: 5
                    }
                }
            };
            const hotelDetails = {
                data: {
                    type: 'hotels',
                    attributes: {
                        location: 'Budapest',
                        name: 'Hotel Ipoly utca',
                        has_wifi: true,
                        has_parking: true,
                        has_pets: true,
                        has_restaurant: true,
                        has_bar: true,
                        has_swimming_pool: true,
                        has_air_conditioning: true,
                        has_gym: true,
                        meal_plan: 'american-plan',
                        stars: 5
        	        }
                
                }
            };

            MockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(hotelResponse)
                })));
            });
            PostService.postRequest(hotelDetails).subscribe((hotelResponse) => {
                expect(hotelResponse.links.self).toEqual('https://your-hostname.com/hotels/1');
                expect(hotelResponse.data.id).toEqual(1);
                expect(hotelResponse.data.attributes.has_wifi).toEqual(true);
            });
        }));
    });
});
