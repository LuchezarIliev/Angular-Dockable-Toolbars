
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppBootstrapModule } from './app-bootstrap.module';

import { AppComponent } from './master-view.component';
import { ControlComponent } from './control/control.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConfigService } from './config/config.service';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  private configService: ConfigService;
  private configComponent: ConfigComponent;
  constructor(private injector: Injector) {
    const httpClient =  this.injector.get<HttpClient>(HttpClient);
    this.configService = new ConfigService(httpClient);
    this.configComponent = new ConfigComponent(this.configService);
    this.configComponent.getToolbarConfig();
    // TODO: load the settings string containing state of the toolbars
  }
}
