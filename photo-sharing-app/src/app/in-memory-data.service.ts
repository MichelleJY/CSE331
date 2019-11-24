import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { ViewPhotoModule } from './all';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const photos = [
      {
        "description": "hello",
        "src": "../images//phpi6JUYj51501229_040_b.jpeg"
      },
      {
        "description": "some description",
        "src": "../images//phpraxmx9DSC_0556.JPG"
      },
      {
        "description": "hello",
        "src": "../images//phpi6JUYj51501229_040_b.jpeg"
      },
      {
        "description": "some description",
        "src": "../images//phpraxmx9DSC_0556.JPG"
    }
    ]

    ;
    return {photos};
  }

}