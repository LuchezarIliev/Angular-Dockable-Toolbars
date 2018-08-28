import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppBootstrapModule } from './app-bootstrap.module';
import { AppComponent } from './master-view.component';
import { Service } from './service.loader';
import { ConfigService } from './config.service';
import { DocumentProvider } from './document.provider';

import { ViewerComponent } from './viewer/viewer.component'; 
import { DynamicComponent } from './dynamic-toolbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ControlComponent } from './control/control.component';
import { Toolbar1 } from './toolbar/toolbar1/toolbar1.component';
import { Toolbar2 } from './toolbar/toolbar2/toolbar2.component';
import { Toolbar3 } from './toolbar/toolbar3/toolbar3.component';
import { Toolbar4 } from './toolbar/toolbar4/toolbar4.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppBootstrapModule
  ],
  declarations: [
    AppComponent,
    ViewerComponent,
    DynamicComponent,
    Toolbar1,
    Toolbar2,
    Toolbar3,
    Toolbar4,
    ControlComponent,
    ToolbarComponent
  ],
  bootstrap: [AppComponent],
  providers: [Service, ConfigService,  DocumentProvider],
  entryComponents: [ViewerComponent, DynamicComponent, Toolbar1, Toolbar2, Toolbar3, Toolbar4]
})

export class AppModule { }
