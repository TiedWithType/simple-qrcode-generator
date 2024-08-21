import { Component } from "@core/component";
import { Settings } from "@service/settings.service";

@Component({ selector: ".container__section__counter" })
export class CounterComponent implements Component<HTMLSpanElement> {
 constructor(
  public view: HTMLSpanElement,
  private settings: Settings,
 ) {
  this.settings = new Settings();
 }

 update(current: number = 0) {
  this.view.textContent = `${current} / ${this.settings.maxLimit}`;
 }
}
