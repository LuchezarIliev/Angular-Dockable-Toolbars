import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

  private settingsUrl: string = '../assets/settings.json';

  constructor(private http: HttpClient) { 
    //this.getJSON().subscribe((data: Object) => { });
  }
/*
  public getJSON(): Promise<Object> {
    return this.http.get<Object>(this.settingsUrl).toPromise();
  }
*/
  public getJSON(): Observable<Object> {
    return this.http.get<Object>(this.settingsUrl);
  }

}
