
import { ViewContainerRef, ComponentFactoryResolver, Injectable } from '@angular/core';

  @Injectable()
  export class Service {

    public rootViewContainer: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver) { }

    public setRootViewContainerRef(viewContainerRef: ViewContainerRef): void {
      this.rootViewContainer = viewContainerRef;
    }

    public addToolbarComponent(selectedComponent): void {
      const factory = this.factoryResolver.resolveComponentFactory(selectedComponent);
      const component = factory.create(this.rootViewContainer.parentInjector);
      this.rootViewContainer.insert(component.hostView);
    }
}
