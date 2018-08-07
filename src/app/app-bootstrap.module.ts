import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    PopoverModule.forRoot()
  ],
  exports: [TooltipModule, PopoverModule]
})

export class AppBootstrapModule {

}
