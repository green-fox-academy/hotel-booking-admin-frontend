import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    httpRequest(UserDetails, endpoint, method): Observable<Comment[]> {
        const bodyString = UserDetails;
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        let request;
        
        switch(method) {
            case 'post': {
                request = this.http.post(endpoint, bodyString, options);       
                break;
            }
            case 'get': {
                request = this.http.post(endpoint, bodyString, options);
                break;
            }
            case 'patch': {
                request = this.http.patch(endpoint, bodyString, options);
                break;
            }
            case 'delete': {
                request = this.http.delete(endpoint, options);
                break;
            }
        };

        return request
            .map((res: Response) => res.json())
            .catch((error: any) =>  Observable.throw(error.json() || 'server error'));
    }
}
