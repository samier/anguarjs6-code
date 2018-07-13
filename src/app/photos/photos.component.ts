import { Component, OnInit } from '@angular/core';

// Import the DataService
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos:any=[];
  pagination:any=[];
  constructor(private PhotosService: PhotosService) { }

  ngOnInit() {
    this.pagination.page=1;
    this.pagination.limit=20;
    this.getPhoto(this.pagination.page,this.pagination.limit);
  }

  getPhoto(page,limit){
    this.PhotosService.getPhotos(page,limit)
        .subscribe(res => {
          console.log("res====>",res);
          this.photos = res;
        });
  }

  

  

  myFunction(page,limit){
    page=page+1;
    console.log("res====>121133");
    console.log("res====>121133",page);
    console.log("res====>121133",limit);
    
    this.PhotosService.getPhotos(page,limit)
        .subscribe(res => {
          this.pagination.page = page;
          console.log("res====>",res);
          var dataNew=this.photos;
          res.map(function(obj){
            dataNew.push(obj);
          })

          this.photos=dataNew;

          
          //this.photos = res;
        });
  }

}
