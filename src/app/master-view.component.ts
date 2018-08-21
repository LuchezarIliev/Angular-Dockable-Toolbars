
import { Component, ViewChild, ViewContainerRef, AfterContentInit, OnInit } from '@angular/core';
import { Service } from './service.loader';
import { DynamicComponent } from './dynamic-toolbar.component';
import { ConfigService } from './config.service';
import { ToolbarPanel, DockPosition } from './app.interfaces';
import { ToolbarComponent } from './toolbar/toolbar.component';

declare var DSXDFUtil: ToolbarPanel;
declare var DSXDFPanel: DockPosition;

@Component({
  providers: [DynamicComponent, ToolbarComponent, ConfigService],
  selector: 'app-root',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})

export class AppComponent implements AfterContentInit, OnInit {

    public dsxdfUtil: ToolbarPanel;
    public toolbar: ToolbarPanel;

    @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

    constructor(private serviceLoader: Service, private toolbarComponent: ToolbarComponent, private configService: ConfigService) { }

    ngOnInit() {
      this.serviceLoader.setRootViewContainerRef(this.viewContainerRef);
      this.serviceLoader.addToolbarComponent(DynamicComponent);
    }

    ngAfterContentInit() {
      this.configService.getJSON().subscribe((data: Object) => {
        this.dsxdfUtil = DSXDFUtil.createDSXDFUtil();
        this.dsxdfUtil.addFixedPanel(document.getElementById('centerdiv'), DSXDFUtil.fixedCenter);
        this.dsxdfUtil.loadStatesFromString(data['Settings']);
        console.log('State loaded!');
        this.toolbarComponent.toolbarInit(this.dsxdfUtil, 'Toolbar #1', 'mydfa', 'toolbar1', 400, 100, DSXDFPanel.dockTop);
        this.toolbarComponent.toolbarInit(this.dsxdfUtil, 'Toolbar #2', 'mydfa', 'toolbar2', 275, 200, DSXDFPanel.dockLeft);
        this.toolbarComponent.toolbarInit(this.dsxdfUtil, 'Toolbar #3', 'mydfa', 'toolbar3', 350, 200, DSXDFPanel.dockRight);
        this.toolbarComponent.toolbarInit(this.dsxdfUtil, 'Toolbar #4', 'mydfa', 'toolbar4', 400, 100, DSXDFPanel.dockBottom);
      });
    }

    public addToolbar(): void {
      this.toolbarComponent.toolbarInit(this.dsxdfUtil, 'Toolbar #5', 'mydfa', 'toolbar5', 400, 100, DSXDFPanel.floated);
    }

    public getCurrentState(): void {

      if (this.dsxdfUtil != null) {
        let savedState: string = this.dsxdfUtil.saveStatesIntoString();
        console.log('State saved!');
        let downloadSettingsLink = document.createElement('a');
        downloadSettingsLink.download = 'settings.json';
        downloadSettingsLink.href = URL.createObjectURL(new Blob(['{"Settings":' + JSON.stringify(savedState) + '}'], {type: "application/json"}));
        downloadSettingsLink.textContent = 'Download settings.json';
        document.getElementById('downloadSettings').appendChild(downloadSettingsLink);
      }
    }

    public showToolbar(visibility): void {
      this.toolbarComponent.showToolbarComponent(visibility);
    }
}

// persistCurrentState(): 
// The savedState contains the settings to replace the current ones in the .json file later on the server

// ngAfterContentInit():
// Using hardcoded string: this.dsxdfUtil.loadStatesFromString('DFIdentifierA\r\n0\r\n0\r\n1116\r\n973\r\nSEC0\r\n275\r\n867\r\n0\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #2\r\n-3142\r\n0\r\n0\r\n0\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nSEC0\r\n1091\r\n100\r\n0\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #1\r\n-3149\r\n1023\r\n0\r\n0\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nSEC0\r\n350\r\n867\r\n0\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #3\r\n-3151\r\n1023\r\n359.42857142857144\r\n285.2329873125721\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nSEC0\r\n1091\r\n100\r\n0\r\n0\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #4\r\n-3149\r\n1023\r\n0\r\n0\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nMINIFRAMES\r\n1\r\n359\r\n285\r\n870\r\n606\r\nSEC0\r\n499\r\n309\r\n-1\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #3\r\n-3149\r\n1023\r\n196864\r\nSECTIONNONE\r\n');
// Using subscription:     this.configService.getJSON().subscribe((data: Object) => { this.dsxdfUtil.loadStatesFromString(data['Settings']); });
// Using promise:          this.configService.getJSON().then((data: Object) => { this.dsxdfUtil.loadStatesFromString(data['Settings']); });
// Using sessionStorage:   this.dsxdfUtil.loadStatesFromKey('Settings');
