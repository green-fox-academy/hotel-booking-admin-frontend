import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule
        ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  }));

  it('should create the login', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login).toBeTruthy();
  }));

  it(`should have as title 'Login'`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login.title).toEqual('Login');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Login');
  }));
});
