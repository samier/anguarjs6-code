import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  result:any;
  baseURL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private _http: Http) { }

  getSearchData(){
    return this._http.get(`${this.baseURL}/comments`)
      .map(result => this.result = result.json());
  }

  likeSearch(name){
    return this._http.get(`${this.baseURL}/comments?name_like=`+name+`&_limit=20`)
      .map(result => this.result = result.json());
  }

  getIdData(Id){
    return this._http.get(`${this.baseURL}/comments?id=`+Id)
      .map(result => this.result = result.json());
  }
}
