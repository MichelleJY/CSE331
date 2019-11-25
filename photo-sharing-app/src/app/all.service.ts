import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GetPhotosModule, ViewPhotoModule } from './all-modules';



@Injectable({ providedIn: 'root' })
export class AllService {

  private baseUrl = 'https://das-lab.org/cse331fa2019/PhotosBackend';  // URL to web api
  private mockUrl = 'api/photos';

  constructor(
    private http: HttpClient) { }

  private viewPhotoUrl = '/viewPhoto.php';
  getViewPhoto(id: String):Observable<ViewPhotoModule[]>{
    // return this.http.get<ViewPhotoModule[]>(this.mockUrl)
    return this.http.get<ViewPhotoModule[]>(this.baseUrl + this.viewPhotoUrl + '?id=' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  private getPhotosUrl = '/getPhotos.php';
  getPhotos():Observable<GetPhotosModule[]> {
    return this.http.get<GetPhotosModule[]>(this.baseUrl + this.getPhotosUrl + '?grp_id=' + '23333')
    .pipe(
      catchError(this.handleError)
    );
  }

  getRandomPhotos():Observable<Object[]> {
    return this.http.get<Object[]>(this.baseUrl + this.getPhotosUrl + '?grp_id=' + '23333')
    .pipe(
      catchError(this.handleError)
    )
  }

  private uploadPhotosUrl = '/uploadPhoto.php';
  postOne(form): Observable<Object> {
    return this.http.post(`${this.baseUrl}${this.uploadPhotosUrl}`, form).pipe(
      map((res) => {
        // console.log(res);
        return res;
    }))
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Cannot load reports now. Check HTTP request and try again.');
  };
}