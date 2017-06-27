import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RegisterComponent } from './register.component';
import { HttpService } from '../httprequest.service';

describe('LoginComponent', () => {
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
        providers: [HttpService]
    }).compileComponents();
  }));

  it('should create the register', async(() => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const signUp = fixture.debugElement.componentInstance;
    expect(signUp).toBeTruthy();
  }));

  it(`should have as title 'Sign up'`, async(() => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const signUp = fixture.debugElement.componentInstance;
    expect(signUp.title).toEqual('Sign up');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Sign up');
  }));
});
