import { TestBed, inject } from '@angular/core/testing';
import {
    HttpModule,
    XHRBackend,
    ResponseOptions,
    Response
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from './httprequest.service';

describe('HttpService', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                HttpService,
                { provide: XHRBackend, useClass: MockBackend },
            ]
        });
    });

    describe('httpRequest()', () => {
        it('should return an Observable<Comment[]> with auth type', inject([HttpService, XHRBackend], (HttpService, MockBackend) => {
            const mockResponse = {
                data: {
                    type: 'user',
                    attributes: {
                        id: '1',
                        email: 'test@example.com',
                        admin: false,
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
            HttpService.httpRequest(userDetails, '', 'post').subscribe((mockResponse) => {
                expect(mockResponse.data.type).toEqual('user');
                expect(mockResponse.data.attributes.id).toEqual('1');
                expect(mockResponse.data.attributes.admin).toEqual(false);
            });
        }));

        it('should return an Observable<Comment[]> with errors', inject([HttpService, XHRBackend], (HttpService, MockBackend) => {
            const falseMockResponse = {
                errors: [{
                    status: 400,
                    title: 'Bad Request',
                    detail: 'Mismatched email and password'
                }]
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
            HttpService.httpRequest(falseUserDetails, '','post').subscribe((falseMockResponse) => {
                expect(falseMockResponse.errors[0].status).toEqual(400);
                expect(falseMockResponse.errors[0].title).toEqual('Bad Request');
                expect(falseMockResponse.errors[0].detail).toEqual('Mismatched email and password');
            });
        }));

         it('should return an Observable<Comment[]> with hotel details', inject([HttpService, XHRBackend], (HttpService, MockBackend) => {
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
            HttpService.httpRequest(hotelDetails, '', 'post').subscribe((hotelResponse) => {
                expect(hotelResponse.links.self).toEqual('https://your-hostname.com/hotels/1');
                expect(hotelResponse.data.id).toEqual(1);
                expect(hotelResponse.data.attributes.has_wifi).toEqual(true);
            });
        }));
    });
});
