
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { ToolbarPanel } from '../app.interfaces';
import { Service } from '../service.loader';
import { Toolbar1 } from './toolbar1.component';

@Component({
  providers: [Toolbar1],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

    @ViewChild('toolbar1', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef

    constructor(private serviceLoader: Service) { }

    ngOnInit() {
      this.serviceLoader.setRootViewContainerRef(this.viewContainerRef);
      this.serviceLoader.addToolbarComponent(Toolbar1);
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
