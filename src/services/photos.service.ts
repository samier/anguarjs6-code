import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfigService } from './config.services';

@Injectable()
export class PhotosService {
  result:any;
 // baseURL: string = 'https://jsonplaceholder.typicode.com';
  baseURL:  string = ConfigService.baseURL;
    
  constructor(private _http: Http) { 

  }

  getPhotos(page,limit) {
    return this._http.get(`${this.baseURL}/photos?_page=`+page+`&_limit=`+limit)
      .map(result => this.result = result.json());
  }
}
