import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { ToolbarPanel, DockPosition } from '../app.interfaces';
import { Service } from '../service.loader';
import { ConfigService } from '../config.service';
import { Toolbar1 } from './toolbar1/toolbar1.component';
import { Toolbar2 } from './toolbar2/toolbar2.component';
import { Toolbar3 } from './toolbar3/toolbar3.component';
import { Toolbar4 } from './toolbar4/toolbar4.component';

declare var DSXDFUtil: ToolbarPanel;
declare var DSXDFPanel: DockPosition;

@Component({
  providers: [Toolbar1, Toolbar2, Toolbar3, Toolbar4],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  public dsxdfUtil: ToolbarPanel;
  public toolbars: ToolbarPanel[];

  @ViewChild('toolbar', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private serviceLoader: Service, private configService: ConfigService) { }

  ngOnInit() {
    this.serviceLoader.setRootViewContainerRef(this.viewContainerRef);
    this.serviceLoader.addDynamicComponent(Toolbar1);
    this.serviceLoader.addDynamicComponent(Toolbar2);
    this.serviceLoader.addDynamicComponent(Toolbar3);
    this.serviceLoader.addDynamicComponent(Toolbar4);
  }

  ngAfterContentInit() {
    this.configService.getJSON().subscribe((data: Object) => {
      this.dsxdfUtil = DSXDFUtil.createDSXDFUtil();
      this.dsxdfUtil.loadStatesFromString(data['Settings']);
      console.log('State loaded!');
      /*<div class="toolbar" *ngFor="let toolbar of toolbars" id="{{toolbar._$hB.id}}"></div>
      this.toolbars = [<toolbars>];
      */
      this.toolbarInit(this.dsxdfUtil, 'Toolbar #1', 'mydfa', 'toolbar1', 400, 100, DSXDFPanel.dockTop),
      this.toolbarInit(this.dsxdfUtil, 'Toolbar #2', 'mydfa', 'toolbar2', 275, 200, DSXDFPanel.dockLeft),
      this.toolbarInit(this.dsxdfUtil, 'Toolbar #3', 'mydfa', 'toolbar3', 350, 200, DSXDFPanel.dockRight),
      this.toolbarInit(this.dsxdfUtil, 'Toolbar #4', 'mydfa', 'toolbar4', 400, 100, DSXDFPanel.dockBottom)
    });
  }

  public toolbarInit(mainView: ToolbarPanel, tbTitle: string, tbClass: string, tbDivId: string,
    tbWidth?: number, tbHeight?: number, tbPosition?: number): void {
    const toolbar: ToolbarPanel = mainView.createDFPanel(tbTitle, tbClass);
    toolbar.addContentDiv(document.getElementById(tbDivId));
    toolbar.initLayout(300, 50, tbWidth, tbHeight, tbPosition);
  }

  public addToolbar(): void {
    this.toolbarInit(this.dsxdfUtil, 'Toolbar #5', 'mydfa', 'toolbar5');
  }

  public showToolbarComponent(visibility): void {
    alert(visibility);
  }
}
