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
<<<<<<< HEAD

export class AppBootstrapModule {

}
=======
export class AppBootstrapModule {}
>>>>>>> 5abc69f93f6926b12ba8523d540433378df40306
