import { CounterComponent } from './counter.component';
import { Settings } from "./document.component";
import { Component } from "../component";
import { updateCounter } from "../utils";
import { ImageComponent } from "./image.component";

@Component(".container__section__input")
export class InputComponent implements Component<HTMLInputElement> {
  viewRef: HTMLInputElement;
  imageComponent: ImageComponent = new ImageComponent();
  counterComponent: CounterComponent = new CounterComponent();

  inputControl() {
    this.viewRef.setAttribute("maxLength", `${Settings.maxLimit}`);
    this.counterComponent.update(this.viewRef.value.length);
  }

  focusEvent() {
    this.inputControl();
  }

  inputEvent() {
    this.inputControl();
    this.imageComponent.generateQRCode(this.viewRef.value);
  }
}
