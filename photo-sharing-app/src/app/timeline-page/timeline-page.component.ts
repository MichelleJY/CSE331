import { Component, OnInit } from '@angular/core';
import {AllService} from '../all.service';
import{ViewPhotoModule} from '../viewPhoto.module';
import {GetPhotosModule} from '../getPhotos.module';


export interface resultModule{
  date:String,
  description: String,
  src: String
}

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.css']
})

export class TimelinePageComponent implements OnInit {


  time = '2019';
  id = '10';
  singlePhoto:ViewPhotoModule[];
  descTemp: String;
  groupPhotosInfo: GetPhotosModule[]; 
  errMsg;
  imgArr:String[] = [];
  descArr: String[] = [];
  dateArr: String[] = [];

  resultArr:resultModule[] = [];
  
  

  constructor(
    private allService: AllService,
  ) { }

  ngOnInit() {
    // this.viewPhoto();
    this.getPhotos();
  }

  public viewPhoto=(id: String)=>{
    this.allService.getViewPhoto(id).subscribe((res:ViewPhotoModule[])=>{
      console.log(res);
      this.singlePhoto = res;
      let temp = {
        date: "mockDate",
        description: res[0].description,
        src: res[0].src
      }
      console.log(temp);
      this.resultArr.push(temp);
    },
    err => {console.log('HTTP error',err);
      this.errMsg = "Error: " + err;
    });


  }

  public getPhotos = () =>{
    this.allService.getPhotos().subscribe((res)=>{
      console.log(res);
      this.groupPhotosInfo = res;
      this.generateMockData();
    },
    err => {console.log('HTTP error',err);
      this.errMsg = "Error: " + err;
    });
  }



  public generateMockData(){
    for(let item of this.groupPhotosInfo){
      this.viewPhoto(item.id);

    }
  }

}
