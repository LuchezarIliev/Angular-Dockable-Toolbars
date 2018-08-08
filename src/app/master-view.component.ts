
import { Component, AfterContentInit, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { ToolbarPanel } from './app.interfaces';
import { ToolbarComponent } from './toolbar/toolbar.component';

declare var DSXDFUtil: ToolbarPanel;

@Component({
  providers: [ToolbarComponent, ConfigService],
  selector: 'app-root',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})

export class AppComponent implements AfterContentInit, OnInit {

    public dsxdfUtil: ToolbarPanel;

    constructor(private toolbarComponent: ToolbarComponent, private configService: ConfigService) { }

    public showToolbar(visibility): void {
      this.toolbarComponent.showToolbarComponent(visibility);
    }

    public persistCurrentState(): void {

      if (this.dsxdfUtil != null) {
        //this.dsxdfUtil.saveStatesIntoKey('Settings');
        sessionStorage.setItem('Settings', this.dsxdfUtil.saveStatesIntoString());
      }
    }

    ngOnInit() {
      this.configService.getJSON().subscribe((data: Object) => { this.dsxdfUtil.loadStatesFromString(data['Settings']); });
    }

    ngAfterContentInit() {
      this.dsxdfUtil = DSXDFUtil.createDSXDFUtil();
      this.dsxdfUtil.addFixedPanel(document.getElementById('centerdiv'), DSXDFUtil.fixedCenter);
      //this.dsxdfUtil.loadStatesFromKey('Settings');
    }
}
