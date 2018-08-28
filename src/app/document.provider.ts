
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentProvider {

  constructor(private http: HttpClient) { }

  public getImage(imageUrl: string): Observable<Blob> {
      return this.http.get(imageUrl, { responseType: 'blob' });
  }

}