
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
    public state: string;

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

    ngAfterContentInit() {
      this.dsxdfUtil = DSXDFUtil.createDSXDFUtil();
      this.dsxdfUtil.addFixedPanel(document.getElementById('centerdiv'), DSXDFUtil.fixedCenter);

      this.configService.getJSON().subscribe((data: Object) => { this.dsxdfUtil.loadStatesFromString(data['Settings']); });
      //this.configService.getJSON().then((data: Object) => { this.dsxdfUtil.loadStatesFromString(data['Settings']); });

      //this.dsxdfUtil.loadStatesFromString('DFIdentifierA\r\n0\r\n0\r\n1116\r\n973\r\nSEC0\r\n275\r\n867\r\n0\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #2\r\n-3142\r\n0\r\n0\r\n0\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nSEC0\r\n1091\r\n100\r\n0\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #1\r\n-3149\r\n1023\r\n0\r\n0\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nSEC0\r\n350\r\n867\r\n0\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #3\r\n-3151\r\n1023\r\n359.42857142857144\r\n285.2329873125721\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nSEC0\r\n1091\r\n100\r\n0\r\n0\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #4\r\n-3149\r\n1023\r\n0\r\n0\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nMINIFRAMES\r\n1\r\n359\r\n285\r\n870\r\n606\r\nSEC0\r\n499\r\n309\r\n-1\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #3\r\n-3149\r\n1023\r\n196864\r\nSECTIONNONE\r\n');
      //this.dsxdfUtil.loadStatesFromKey('Settings');
    }

    ngOnInit() {
    }
}
