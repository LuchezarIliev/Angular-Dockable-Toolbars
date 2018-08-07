import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => { console.log(data); });
  }

  public getJSON(): Observable<Object> {
    return this.http.get('../assets/settings.json');
  }
}