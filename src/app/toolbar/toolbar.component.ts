
import { Component, AfterContentInit, OnInit } from '@angular/core';
import { ToolbarPanel, DockPosition } from '../app.interfaces';

declare var DSXDFUtil: ToolbarPanel;
declare var DSXDFPanel: DockPosition;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements AfterContentInit, OnInit {

    public mainView: ToolbarPanel;
    public toolbar1: ToolbarPanel;
    public toolbar2: ToolbarPanel;
    public toolbar3: ToolbarPanel;
    public toolbar4: ToolbarPanel;

    private toolbarInit(
      mainView: ToolbarPanel,
      tbTitle: string,
      tbClass: string,
      tbDivId: string,
      tbWidth: number,
      tbHeigth: number,
      tbPosition: number): ToolbarPanel {

      let toolbar: ToolbarPanel = mainView.createDFPanel(tbTitle, tbClass);
      toolbar.addContentDiv(document.getElementById(tbDivId));
      toolbar.initLayout(300, 50, tbWidth, tbHeigth, tbPosition);

      return toolbar;
      
    }

    public showToolbarComponent(visibility): void {
      alert(visibility);
    }

    public ngAfterContentInit(): void {

        this.mainView = DSXDFUtil.createDSXDFUtil();

        this.toolbar1 = this.toolbarInit(this.mainView, "Toolbar #1", "mydfa", "toolbar1", 400, 100, DSXDFPanel.dockTop),
        this.toolbar2 = this.toolbarInit(this.mainView, "Toolbar #2", "mydfa", "toolbar2", 275, 200, DSXDFPanel.dockLeft),
        this.toolbar3 = this.toolbarInit(this.mainView, "Toolbar #3", "mydfa", "toolbar3", 350, 200, DSXDFPanel.dockRight),
        this.toolbar4 = this.toolbarInit(this.mainView, "Toolbar #4", "mydfa", "toolbar4", 400, 100, DSXDFPanel.dockBottom);

    }

    ngOnInit() {
    }
}