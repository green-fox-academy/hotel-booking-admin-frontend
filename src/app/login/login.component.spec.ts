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

import { LoginComponent } from './login.component';
import { PostService } from '../postrequest.service';

describe('LoginComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                HttpModule
            ],
            declarations: [
                LoginComponent
            ],
            providers: [
                PostService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        }).compileComponents();
    }));

    it('should create the login', async(() => {
        const fixture = TestBed.createComponent(LoginComponent);
        const login = fixture.debugElement.componentInstance;
        expect(login).toBeTruthy();
    }));

    it(`should have as title 'Sign in'`, async(() => {
        const fixture = TestBed.createComponent(LoginComponent);
        const login = fixture.debugElement.componentInstance;
        expect(login.title).toEqual('Sign in');
    }));

    it('should render title in a h2 tag', async(() => {
        const fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain('Sign in');
    }));

    it('should save JWT to session storage', inject([PostService, XHRBackend], (PostService, MockBackend) => {
        const mockResponse = {
            data: {
                type: 'auth',
                attributes: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RBZG1pbiIsImFkbWluIjp0cnVlfQ.nhC1EDI5xLGM4yZL2VMZyvHcbcWiXM2RVS7Y8Pt0Zuk'
                }
            }
        };

        MockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
            })));
        });
        const fixture = TestBed.createComponent(LoginComponent);
        const login = fixture.debugElement.componentInstance;
        login.onUserLogin();
        expect(login.loading).toBeFalsy();
        expect(sessionStorage.getItem('CurrentUser')).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3RBZG1pbiIsImFkbWluIjp0cnVlfQ.nhC1EDI5xLGM4yZL2VMZyvHcbcWiXM2RVS7Y8Pt0Zuk');
    }));
});
