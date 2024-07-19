import { Component } from "../component";
import { Settings } from "./app-root.component";

@Component({ selector: ".container__section__counter" })
export class CounterComponent implements Component<HTMLSpanElement> {
  constructor(public viewRef: HTMLSpanElement) {}

  update(current: number = 0) {
    this.viewRef.textContent = `${current} / ${Settings.maxLimit}`;
  }
}
