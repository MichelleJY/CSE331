import { Component, OnInit } from '@angular/core';
import {AllService} from '../all.service';
import {GetPhotosModule, ViewPhotoModule, PhotoDetail} from '../all-modules';
import { Globals } from '../globals'
import { tokenReference } from '@angular/compiler';

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.css'],
  providers: [ Globals ]
})

export class TimelinePageComponent implements OnInit {


  year = '2019';

  // singlePhoto:ViewPhotoModule[];
  descTemp: String;
  groupPhotosInfo: GetPhotosModule[];
  errMsg;

  resultArr:PhotoDetail[] = [];
  globalResultArr:PhotoDetail[] = [];
  
  

  constructor(
    private allService: AllService,
    private globals: Globals
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  public viewPhoto=(id: String)=>{
    this.allService.getViewPhoto(id).subscribe((res:ViewPhotoModule[])=>{
      let tempDescrp = res[0].description;
      let objDescrp = JSON.parse(String(tempDescrp));
      //generate json object represent one photo
      let temp = {
        albumId: objDescrp.albumId,
        cover: objDescrp.cover,
        create_date: objDescrp.create_date,
        parsed_date: this.getDate(objDescrp.create_date),
        description: objDescrp.description,
        event: objDescrp.event,
        src: res[0].src
      }
      //push to globle variable
      this.globalResultArr.push(temp);
      if(this.globalResultArr.length == this.groupPhotosInfo.length){
        this.sortByTime(this.globalResultArr);
        for(let entry of this.globalResultArr){
          if(entry.cover == true){
            this.resultArr.push(entry);
          }
        }
        this.chageGlobals();
      }
    },
    err => {console.log('HTTP error',err);
      this.errMsg = "Error: " + err;
    });


  }

  public getPhotos = () =>{
    this.allService.getPhotos().subscribe((res)=>{
      console.log(res);
      this.groupPhotosInfo = res;
      this.globals.globalGroupPhotos =this.groupPhotosInfo;
      this.generatePhotoData();
    },
    err => {console.log('HTTP error',err);
      this.errMsg = "Error: " + err;
    });
  }



  public generatePhotoData(){
    for(let item of this.groupPhotosInfo){
      this.viewPhoto(item.id);
    }
  }

  public getDate(rawDate: string){
    let monthName = ["January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"]
    let monthNameAbb = ["Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May.",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec."]
    let month = rawDate.slice(5,7);
    let date = rawDate.slice(8,10);
    return monthNameAbb[+month-1] + " " + date;
  }

  private chageGlobals(){
    this.globals.globalOnePhotoArr = this.globalResultArr;
  }

  public sortByTime(a:PhotoDetail[]){

    var sortedArray: PhotoDetail[] = a.sort((obj1, obj2) => {
      if (+obj1.create_date.slice(5,7) > +obj2.create_date.slice(5,7)) {
          return -1;
      }
  
      if (+obj1.create_date.slice(5,7) < +obj2.create_date.slice(5,7)) {
          return 1;
      }
      
      if(+obj1.create_date.slice(5,7) == +obj2.create_date.slice(5,7)){
        if(+obj1.create_date.slice(8,10) > +obj2.create_date.slice(8,10)){
          return -1;
        }
        if(+obj1.create_date.slice(8,10) < +obj2.create_date.slice(8,10)){
          return 1;
        }

      }
  
      return 0;
  });
  

  }

}
