import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { Service } from './service.loader';
import { ViewerComponent } from './viewer/viewer.component';
import { DynamicComponent } from './dynamic-toolbar.component';
import { ToolbarPanel } from './app.interfaces';

@Component({
  providers: [ViewerComponent, DynamicComponent],
  selector: 'app-root',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})

export class AppComponent implements OnInit {

  public dsxdfUtil: ToolbarPanel;

  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private serviceLoader: Service) { }

  ngOnInit() {
    this.serviceLoader.setRootViewContainerRef(this.viewContainerRef);
    this.serviceLoader.addDynamicComponent(ViewerComponent);
    this.serviceLoader.addDynamicComponent(DynamicComponent);
  }
}
