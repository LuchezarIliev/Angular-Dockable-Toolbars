import { ViewContainerRef, ComponentFactoryResolver, Injectable } from '@angular/core';
import { DocumentProvider } from './document.provider';
import { Observable } from 'rxjs'; 

  @Injectable()
  export class Service {

    public rootViewContainer: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver, private docProvider: DocumentProvider) { }

    public setRootViewContainerRef(viewContainerRef: ViewContainerRef): void {
      this.rootViewContainer = viewContainerRef;
    }

    public addDynamicComponent(selectedComponent): void {
      const factory = this.factoryResolver.resolveComponentFactory(selectedComponent);
      const component = factory.create(this.rootViewContainer.parentInjector);
      this.rootViewContainer.insert(component.hostView);
    }

    public getImageFromUrl(imageUrl: string): Observable<Blob>  {
      return this.docProvider.getImage(imageUrl);
    }
}
