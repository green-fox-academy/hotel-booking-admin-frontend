import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

    constructor( private http: Http ) { }

    httpRequest(bodies, endpoint, reqMethod): Observable<Comment[]> {
        const serverEndpoint = 'https://two-ferns.glitch.me/';
        return this.http.request(new Request({
            method: reqMethod,
            url: serverEndpoint + endpoint,
            body: bodies
        }))
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json() || 'server error'));
    }
}
