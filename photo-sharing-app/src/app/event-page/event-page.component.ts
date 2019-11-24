import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AllService } from '../all.service';
import { Globals } from '../globals'
import {GetPhotosModule, ViewPhotoModule, PhotoDetail} from '../all-modules';


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ Globals ]

})
export class EventPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private allService: AllService,
    private location: Location,
    private globals: Globals


  ) {}

  ngOnInit() {
    this.getData();
  }

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  id;
  globalOnePhotoArr:PhotoDetail[] = [];
  globalGroupPhotos:GetPhotosModule[] = [];
  

  getData(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.globalGroupPhotos = this.globals.globalGroupPhotos;
    this.globalOnePhotoArr = this.globals.globalOnePhotoArr;
  }

  
}
