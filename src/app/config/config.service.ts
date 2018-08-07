
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ConfigService {
  private configUrl = './config.json';
  constructor(private http: HttpClient) {
  }

  public getConfig() {
    return this.http.get(this.configUrl);
  }

  public httpGet(url: string) {
      return this.http.get(url);
  }
}
