
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

        let mainView: ToolbarPanel = DSXDFUtil.createDSXDFUtil();
        //mainView.addFixedPanel(document.getElementById("centerdiv"), DSXDFUtil.fixedCenter);

        let toolbar1: ToolbarPanel = this.toolbarInit(mainView, "Toolbar #1", "mydfa", "toolbar1", 400, 100, DSXDFPanel.dockTop),
            toolbar2: ToolbarPanel = this.toolbarInit(mainView, "Toolbar #2", "mydfa", "toolbar2", 275, 200, DSXDFPanel.dockLeft),
            toolbar3: ToolbarPanel = this.toolbarInit(mainView, "Toolbar #3", "mydfa", "toolbar3", 350, 200, DSXDFPanel.dockRight),
            toolbar4: ToolbarPanel = this.toolbarInit(mainView, "Toolbar #4", "mydfa", "toolbar4", 400, 100, DSXDFPanel.dockBottom);

        toolbar1.setVisible(true);
        toolbar2.setVisible(true);
        toolbar3.setVisible(true);
        toolbar4.setVisible(true);

        console.log(toolbar1);
        
        /*This also works but it is inefficient: DON'T REPEAT YOURSELF!

        var topToolbar: any = mainView.createDFPanel("Toolbar #1", "mydfa");
        topToolbar.addContentDiv(document.getElementById("toolbar1"));
        topToolbar.initLayout(300, 50, 400, 100, 1);

        var leftToolbar: any = mainView.createDFPanel("Toolbar #2", "mydfa");
        leftToolbar.addContentDiv(document.getElementById("toolbar2"));
        leftToolbar.initLayout(300, 50, 250, 200, 0);

        var rightToolbar: any = mainView.createDFPanel("Toolbar #3", "mydfa");
        rightToolbar.addContentDiv(document.getElementById("toolbar3"));
        rightToolbar.initLayout(300, 50, 250, 200, 2);

        var bottomToolbar: any = mainView.createDFPanel("Toolbar #4", "mydfa");
        bottomToolbar.addContentDiv(document.getElementById("toolbar4"));
        bottomToolbar.initLayout(300, 50, 400, 100, 3);

        */
       
    }

    ngOnInit() {
    }
}