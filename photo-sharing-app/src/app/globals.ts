import { Injectable } from '@angular/core';
import {GetPhotosModule, ViewPhotoModule, PhotoDetail} from './all-modules';


@Injectable()
export class Globals {
  globalOnePhotoArr:PhotoDetail[] = [];
  globalGroupPhotos:GetPhotosModule[] = [];

  
}