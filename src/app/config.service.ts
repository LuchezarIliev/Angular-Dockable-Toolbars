import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

  private settingsUrl: string = '../assets/settings.json';

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<Object> {
    console.log(this.http.get<Object>(this.settingsUrl) );
    return this.http.get<Object>(this.settingsUrl);
  }

}
