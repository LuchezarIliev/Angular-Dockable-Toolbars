
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppBootstrapModule } from './app-bootstrap.module';

import { AppComponent } from './master-view.component';
import { Service } from './service.loader';
import { DynamicComponent } from './dynamic-toolbar.component';
import { Toolbar1 } from './toolbar/toolbar1.component';
import { ControlComponent } from './control/control.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    Toolbar1,
    ControlComponent,
    ToolbarComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppBootstrapModule
  ],
  providers: [Service],
  bootstrap: [AppComponent],
  entryComponents: [DynamicComponent, Toolbar1]
})

export class AppModule {
    constructor() {  
    }
}