import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { AutoCompleteService } from 'ng4-auto-complete';

// Import the DataService
import { SearchService } from '../../services/search.service';
import * as _ from 'lodash';
declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchData:any=[];
  dataList:any;
  selectname:any;
  selectnameId:any;

  constructor(private SearchService:SearchService,public autoCompleteService: AutoCompleteService) { }

  ngOnInit() {
    this.getSearchData();
  }

  getSearchData(){
    this.SearchService.getSearchData()
        .subscribe(res => {
          this.searchData = res;
        });
  }
  
  onSearchChange(searchValue : string ) { 
    this.SearchService.likeSearch(searchValue)
    .subscribe(res => {
          this.dataList = res;
    });
  }

  onSubmit(){
    this.SearchService.getIdData(this.selectnameId)
    .subscribe(res => {
      this.searchData = res;
    });
  }

  onChange(data){
    this.selectname=data.name; 
    this.selectnameId=data.id;
    this.dataList=[];
  }
  
}
