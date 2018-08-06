
import { Component, AfterContentInit, OnInit } from '@angular/core';
import { ToolbarPanel } from './app.interfaces';
import { ToolbarComponent } from './toolbar/toolbar.component';

declare var DSXDFUtil: ToolbarPanel;

@Component({
  providers: [ToolbarComponent],
  selector: 'app-root',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})
 
export class AppComponent implements AfterContentInit, OnInit {

    public dsxdfUtil: ToolbarPanel;

    constructor(private toolbarComponent: ToolbarComponent) { }

    public showToolbar(visibility): void {
      this.toolbarComponent.showToolbarComponent(visibility);
    }

    public onleavepage(): void {
      if(this.dsxdfUtil != null) {
        this.dsxdfUtil.saveStatesIntoKey("Settings");
      }
    }

    ngAfterContentInit() {
      this.dsxdfUtil = DSXDFUtil.createDSXDFUtil();
      this.dsxdfUtil.loadStatesFromKey("Settings");
      this.dsxdfUtil.addFixedPanel(document.getElementById("centerdiv"), DSXDFUtil.fixedCenter);
    }

    ngOnInit() {
    }
}
