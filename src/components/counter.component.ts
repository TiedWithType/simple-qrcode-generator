import { Component, Inject } from "/core";
import { Settings } from "/service/settings.service";

@Component({ selector: ".container__section__counter" })
export class CounterComponent {
 @Inject(Settings) settings;

 update(current: number = 0) {
  this.viewRef.textContent =
  `${current} / ${this.settings.maxLimit}`;
 }
}
