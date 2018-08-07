
import { ConfigService } from './config.service';
import { Config } from './config.interface';


export class ConfigComponent {
    constructor(private configService: ConfigService) {
    }

    public getToolbarConfig() {
      return this.showConfig().subscribe((data: Config) => {
            return this.configService.httpGet(data.dockableToolbarsSettings).subscribe((httpData: any) => {
               return httpData.text();
            });
        });
    }

    public showConfig() {
        return this.configService.getConfig();
    }
}
