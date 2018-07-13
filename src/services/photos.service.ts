import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PhotosService {
  result:any;
  baseURL: string = 'https://jsonplaceholder.typicode.com';
    
  constructor(private _http: Http) { 

  }

  getPhotos() {
    return this._http.get(`${this.baseURL}/photos`)
      .map(result => this.result = result.json());
  }
}
