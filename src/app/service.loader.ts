import { ComponentFactoryResolver, Injectable, Inject } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

  @Injectable()
  export class Service {

    public factoryResolver: any;
    public rootViewContainer: any;

    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
      this.factoryResolver = factoryResolver;
    }

    setRootViewContainerRef(viewContainerRef): void {
      this.rootViewContainer = viewContainerRef;
    }

    addToolbarComponent(): void {
      const factory = this.factoryResolver.resolveComponentFactory(DynamicComponent);
      const component = factory.create(this.rootViewContainer.parentInjector);
      this.rootViewContainer.insert(component.hostView);
    }
}
