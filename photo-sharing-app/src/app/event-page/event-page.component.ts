import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AllService } from '../all.service';
import { Globals } from '../globals'
import {GetPhotosModule, ViewPhotoModule, PhotoDetail} from '../all-modules';


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ Globals ]

})

export class EventPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private allService: AllService,
    private location: Location,
  ) {
  }

  ngOnInit() {
    this.getData();
    this.getPhotos();
  }

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  id;

  groupPhotosInfo: GetPhotosModule[];
  errMsg;
  resultArr:PhotoDetail[] = [];
  globalResultArr:PhotoDetail[] = [];

  sortedAlbumArr:PhotoDetail[] = [];

  currentAlbumId:String = "";

  displayimg;
  displaydate;
  displaydescp;
  

  getData(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
  }


  public sortByAlbum(a:PhotoDetail[]){
    var sortedArray: PhotoDetail[] = a.sort((obj1, obj2) => {
      if (obj1.albumId > obj2.albumId) {
          return 1;
      }
  
      if (obj1.albumId < obj2.albumId) {
          return -1;
      }
  
      return 0;
    });
    return sortedArray;
  }

  public displayImg(src:any, date:any, descp:any){
    console.log("display");
    this.displayimg = src;
    this.displaydate = date;
    this.displaydescp = descp;
  }

  public selectId(a:PhotoDetail[]){
    let result:PhotoDetail[] = []
    for(let i of a){
      if(i.event == this.id){
        result.push(i);
      }
    }
    return result;
  }

  oneAlbum(albumId:String){
    // if(this.currentAlbumId != albumId){
    //   this.currentAlbumId = albumId;
    //   return true;
    // }
    // return false;
    return true;

  }


  //-----get from timeline-----
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
        this.globalResultArr = this.sortByTime(this.globalResultArr);
        let tempArr = this.selectId(this.globalResultArr);
        this.sortedAlbumArr = this.sortByAlbum(tempArr);
        console.log(this.sortedAlbumArr);

      }
    },
    err => {console.log('HTTP error',err);
      this.errMsg = "Error: " + err;
    });
  }

  public getPhotos = () =>{
    this.allService.getPhotos().subscribe((res)=>{
      this.groupPhotosInfo = res;
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
  return sortedArray;
  

  }


}
