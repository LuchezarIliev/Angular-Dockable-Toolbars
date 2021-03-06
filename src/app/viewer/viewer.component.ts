import { Component, OnInit } from '@angular/core';
import { ToolbarPanel } from '../app.interfaces';
import { Service } from '../service.loader';

declare var DSXDFUtil: ToolbarPanel;

@Component({
    selector: 'dynamic-viewer-component',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.css']
})

export class ViewerComponent implements OnInit {

    public dsxdfUtil: ToolbarPanel;

    public imageUrl: string = 'https://picsum.photos/500/500/?random';
    public imageToShow: string | ArrayBuffer;
    public isImageLoading: boolean;

    constructor(private serviceLoader: Service) { }

    ngOnInit() {
        this.dsxdfUtil = DSXDFUtil.createDSXDFUtil();
        this.dsxdfUtil.addFixedPanel(document.getElementById('centerdiv'), DSXDFUtil.fixedCenter);
    }

    public getCurrentState(): void {
        if (this.dsxdfUtil != null) {
            let savedState: string = this.dsxdfUtil.saveStatesIntoString();
            console.log('State saved!');
            let downloadSettingsLink = document.createElement('a');
            downloadSettingsLink.download = 'settings.json';
            downloadSettingsLink.href = URL.createObjectURL(new Blob(['{"Settings":' + JSON.stringify(savedState) + '}'], { type: "application/json" }));
            downloadSettingsLink.textContent = 'Download settings.json';
            document.getElementById('downloadSettings').appendChild(downloadSettingsLink);
        }
    }

    public creatImageFromBlob(image: Blob) {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    }

    public getImageFromService() {
        this.isImageLoading = true;
        this.serviceLoader.getImageFromUrl(this.imageUrl).subscribe(data => {
            this.creatImageFromBlob(data);
            this.isImageLoading = false;
        }, error => {
            this.isImageLoading = false;
            console.log(error);
        });
    }
}
// getCurrentState(): 
// The savedState contains the settings to replace the current ones in the .json file later on the server

// ngAfterContentInit():
// Using hardcoded string: this.dsxdfUtil.loadStatesFromString('DFIdentifierA\r\n0\r\n0\r\n1116\r\n973\r\nSEC0\r\n275\r\n867\r\n0\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #2\r\n-3142\r\n0\r\n0\r\n0\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nSEC0\r\n1091\r\n100\r\n0\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #1\r\n-3149\r\n1023\r\n0\r\n0\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nSEC0\r\n350\r\n867\r\n0\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #3\r\n-3151\r\n1023\r\n359.42857142857144\r\n285.2329873125721\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nSEC0\r\n1091\r\n100\r\n0\r\n0\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #4\r\n-3149\r\n1023\r\n0\r\n0\r\n300\r\n200\r\n196864\r\nSECTIONNONE\r\nMINIFRAMES\r\n1\r\n359\r\n285\r\n870\r\n606\r\nSEC0\r\n499\r\n309\r\n-1\r\n-1\r\n0\r\nROOTBLOCK\r\n1000\r\nLEFTNONE\r\nRIGHTNONE\r\n1\r\nToolbar #3\r\n-3149\r\n1023\r\n196864\r\nSECTIONNONE\r\n');
// Using subscription:     this.configService.getJSON().subscribe((data: Object) => { this.dsxdfUtil.loadStatesFromString(data['Settings']); });
// Using promise:          this.configService.getJSON().then((data: Object) => { this.dsxdfUtil.loadStatesFromString(data['Settings']); });
// Using sessionStorage:   this.dsxdfUtil.loadStatesFromKey('Settings');
