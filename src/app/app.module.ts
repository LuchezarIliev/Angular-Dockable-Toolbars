
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppBootstrapModule } from './app-bootstrap.module';

import { AppComponent } from './master-view.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ControlComponent } from './control/control.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ControlComponent,
    ToolbarComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 
export class AppModule {
    constructor() {  
    }
}