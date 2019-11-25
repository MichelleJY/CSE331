import { Component, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AllService } from "../all.service";
import { ActivatedRoute } from "@angular/router";
import { GetPhotosModule, PhotoDetail, ViewPhotoModule } from "../all-modules";

@Component({
  selector: "discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"]
})
export class DiscoverComponent {
  constructor(private allService: AllService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.allService.getRandomPhotos().subscribe((res)=>{
      var randomId = Math.floor(Math.random() * res.length);
      this.groupPhotosInfo = res[randomId];
      this.viewPhoto( this.groupPhotosInfo.id);
    }, err =>{
      return null;
    });
  }
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  id;

  groupPhotosInfo: any;
  errMsg;
  resultArr: PhotoDetail[] = [];
  globalResultArr: PhotoDetail[] = [];

  sortedAlbumArr: PhotoDetail[] = [];

  currentAlbumId: String;

  displayimg;
  displaydate;
  displaydescp;

  public displayImg(src: any, date: any, descp: any) {
    console.log(src);
    this.displayimg = src;
    this.displaydate = date;
    this.displaydescp = descp;
  }

  public selectId(a: PhotoDetail[]) {
    let result: PhotoDetail[] = [];
    for (let i of a) {
      if (i.event == this.id) {
        result.push(i);
      }
    }
    return result;
  }

  //-----get from timeline-----
  public viewPhoto = (id: String) => {
    this.allService.getViewPhoto(id).subscribe(
      (res: ViewPhotoModule[]) => {
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
        };
        //push to globle variable
        this.groupPhotosInfo = temp
        this.id = id;
        this.displayImg(this.groupPhotosInfo.src, this.getDate(this.groupPhotosInfo.create_date), this.groupPhotosInfo.description);
        console.log(this.groupPhotosInfo)
      },
      err => {
        console.log("HTTP error", err);
        this.errMsg = "Error: " + err;
      }
    );
  };

  public getDate(rawDate: string) {
    let monthName = [
      "January",
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
      "December"
    ];
    let monthNameAbb = [
      "Jan.",
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
      "Dec."
    ];
    let month = rawDate.slice(5, 7);
    let date = rawDate.slice(8, 10);
    return monthNameAbb[+month - 1] + " " + date;
  }

  refresh(){
    window.location.reload();
  }
}
