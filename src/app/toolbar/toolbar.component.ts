
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { ToolbarPanel } from '../app.interfaces';
import { Service } from '../service.loader';
import { Toolbar1 } from './toolbar1/toolbar1.component';
import { Toolbar2 } from './toolbar2/toolbar2.component';
import { Toolbar3 } from './toolbar3/toolbar3.component';
import { Toolbar4 } from './toolbar4/toolbar4.component';

@Component({
  providers: [Toolbar1, Toolbar2, Toolbar3, Toolbar4],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

    @ViewChild('toolbar', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

    constructor(private serviceLoader: Service) { }

    ngOnInit() {
      this.serviceLoader.setRootViewContainerRef(this.viewContainerRef);
      this.serviceLoader.addToolbarComponent(Toolbar1);
      this.serviceLoader.addToolbarComponent(Toolbar2);
      this.serviceLoader.addToolbarComponent(Toolbar3);
      this.serviceLoader.addToolbarComponent(Toolbar4);
    }

    public toolbarInit(mainView: ToolbarPanel,tbTitle?: string,tbClass?: string, 
      tbDivId?: string, tbWidth?: number, tbHeight?: number, tbPosition?: number): ToolbarPanel {
        
      const toolbar: ToolbarPanel = mainView.createDFPanel(tbTitle, tbClass);
      toolbar.addContentDiv(document.getElementById(tbDivId));
      toolbar.initLayout(300, 50, tbWidth, tbHeight, tbPosition);

      return toolbar;
    }

    public showToolbarComponent(visibility): void {
      alert(visibility);
    }
}
