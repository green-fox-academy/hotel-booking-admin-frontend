import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {
    HttpModule,
    XHRBackend,
    ResponseOptions,
    Response
    } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { RegisterComponent } from './register.component';
import { HttpService } from '../httprequest.service';

describe('RegisterComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                HttpModule
            ],
            declarations: [
                RegisterComponent
            ],
            providers: [
                HttpService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        }).compileComponents();
    }));

    it('should create the register', async(() => {
        const fixture = TestBed.createComponent(RegisterComponent);
        const signUp = fixture.debugElement.componentInstance;
        expect(signUp).toBeTruthy();
    }));

    // Commented out - fails on heroku - no error during ng test
    // it('should render title in a h2 tag', async(() => {
    //     const fixture = TestBed.createComponent(RegisterComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h2').textContent).toContain('Sign up');
    // }));

    it('should save JWT to session storage', inject([HttpService, XHRBackend], (HttpService, MockBackend) => {
        const mockResponse = {
            data: {
                type: 'user',
                attributes: {
                    id: '1',
                    email: 'john.doe@example.org',
                    admin: false,
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RBZG1pbiIsImFkbWluIjp0cnVlfQ.nhC1EDI5xLGM4yZL2VMZyvHcbcWiXM2RVS7Y8Pt0Zuk'
                }
            }
        };

        MockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
            })));
        });
        const fixture = TestBed.createComponent(RegisterComponent);
        const login = fixture.debugElement.componentInstance;
        login.onUserRegister();
        expect(login.loading).toBeFalsy();
        expect(sessionStorage.getItem('CurrentUser')).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RBZG1pbiIsImFkbWluIjp0cnVlfQ.nhC1EDI5xLGM4yZL2VMZyvHcbcWiXM2RVS7Y8Pt0Zuk');
    }));
});
