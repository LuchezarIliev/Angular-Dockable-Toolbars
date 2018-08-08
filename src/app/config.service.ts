import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

  public state: string;

  constructor(private http: HttpClient) { 
    this.getJSON().subscribe((data: Object) => { this.state = data["Settings"]; });
  }

  public getJSON(): Observable<Object> {
    return this.http.get('../assets/settings.json');
  }
}