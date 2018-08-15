
import { ComponentFactoryResolver, Injectable, Inject } from '@angular/core';

  @Injectable()
  export class Service {

    public factoryResolver: any;
    public rootViewContainer: any;

    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
      this.factoryResolver = factoryResolver;
    }

    public setRootViewContainerRef(viewContainerRef): void {
      this.rootViewContainer = viewContainerRef;
    }

    public addToolbarComponent(selectedComponent): void {
      const factory = this.factoryResolver.resolveComponentFactory(selectedComponent);
      const component = factory.create(this.rootViewContainer.parentInjector);
      this.rootViewContainer.insert(component.hostView);
    }
}
