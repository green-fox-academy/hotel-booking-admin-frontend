import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RegisterService {

    constructor(private http: Http) { }

    postLoginDetails(registerDetails): Observable<Comment[]> {
        const endpoint = 'http://localhost:8080/api/register';
        const bodyString = registerDetails;
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this.http.post(endpoint, bodyString, options)
            .map((res: Response) => res.json())
            .catch((error: any) =>  Observable.throw(error.json().error || 'server error'));
    }
}
