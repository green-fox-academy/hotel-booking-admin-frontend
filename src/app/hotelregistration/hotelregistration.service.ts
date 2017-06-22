import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HotelregistrationService {

  constructor(private http: Http) { }

      addHotels(newHotel): Observable<Comment[]> {
          const endpoint = 'http://localhost:8080/hotels';
          const bodyString = newHotel;
          const headers = new Headers({ 'Content-Type': 'application/json'});
          const options = new RequestOptions({headers: headers});
          return this.http.post(endpoint, bodyString, options)
              .map((res: Response) => res.json())
              .catch((error: any) =>  Observable.throw(error.json().error || 'server error'));
    }
}
