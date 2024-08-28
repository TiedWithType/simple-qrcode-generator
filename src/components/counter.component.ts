import { Component } from "/core";
import { Settings } from "../service/settings.service";

@Component({ selector: ".container__section__counter" })
export class CounterComponent {
 constructor(private settings: Settings) {
  this.settings = new Settings();
 }

 update(current: number = 0) {
  this.viewRef.textContent = `${current} / ${this.settings.maxLimit}`;
 }
}
