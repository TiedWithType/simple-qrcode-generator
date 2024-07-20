import { Component } from "@core/component";
import { Settings } from '@service/settings.service';

@Component({ selector: ".container__section__counter" })
export class CounterComponent implements Component<HTMLSpanElement> {
  constructor(public view: HTMLSpanElement) {}

  update(current: number = 0) {
    this.view.textContent = `${current} / ${Settings.maxLimit}`;
  }
}