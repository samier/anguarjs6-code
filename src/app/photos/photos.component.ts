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
  constructor(private PhotosService: PhotosService) { }

  ngOnInit() {
    this.getPhoto();
  }

  getPhoto(){
    this.PhotosService.getPhotos()
        .subscribe(res => {
          console.log("res====>",res);
          this.photos = res;
        });
  }

}
