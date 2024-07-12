import { InputComponent } from "./input.component";
import { Component } from "../component";
import { Settings } from "./document.component";

@Component(".container__section__counter")
export class CounterComponent implements Component<HTMLSpanElement> {
  viewRef: HTMLSpanElement;

  update(current: number = 0) {
    this.viewRef.textContent = `${current} / ${Settings.maxLimit}`;
  }
}
