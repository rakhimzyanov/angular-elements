import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyModalComponent } from './my-modal/my-modal.component';

import { createCustomElement } from '@angular/elements';
import { SuperBtnComponent } from './super-btn/super-btn.component';

@NgModule({
  declarations: [
    MyModalComponent,
    SuperBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    MyModalComponent,
    SuperBtnComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {  }

  ngDoBootstrap() {

    const modalEl = createCustomElement(MyModalComponent, { injector: this.injector });
    customElements.define('my-modal', modalEl);

    const superBtn = createCustomElement(SuperBtnComponent, { injector: this.injector });
    customElements.define('super-btn', superBtn);

  }

}
