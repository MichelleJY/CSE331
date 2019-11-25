import { Component, OnInit  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AllService } from '../all.service';

@Component({
  selector: 'photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent {
    images: any;
//   title = 'PROJECT-NAME';
    $path_to_backend = 'https://das-lab.org/cse331fa2019/PhotosBackend/';
    imageArr: any[] = [];
    src: any[] = [];
    des: any;
    description: any = {};
//   photoId: any;
  eventTag:any;

 constructor(private appserive: AllService) {
  }

  upload() {
    var albumId = '_' + Math.random().toString(36).substr(2, 9); //? rand + photo id ?
    var cover = true;
    for (let src of this.src)
    {
      const formData = new FormData();
      formData.append('fupload', src);
      formData.append('grp_id', '23333');
      this.description.albumId = albumId;
      this.description.cover = cover;
      cover = false;
      this.description.create_date = new Date();
      this.description.description = this.des;
      this.description.event = this.eventTag;
      formData.append('description', JSON.stringify(this.description));
      this.appserive.postOne(formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }
  }

  ngOnInit() {
  }

  onChanged($event)
  {
      var oFReader = new FileReader();
      oFReader.readAsDataURL($event.target.files[0]);
      this.src.push($event.target.files[0]);
      oFReader.onload = (oFREvent) => {
          this.imageArr.push(oFReader.result);
      };
  }

  removeImg(event)
  {
    var id = this.imageArr.indexOf(event);
    this.imageArr.splice(id, 1);
    this.src.splice(id, 1)
  }
}
