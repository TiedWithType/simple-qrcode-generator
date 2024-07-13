import { CounterComponent } from "./counter.component";
import { Settings } from "./document.component";
import { Component } from "../component";
import { ImageComponent } from "./image.component";
import { Inject } from "../inject";

@Inject([CounterComponent, ImageComponent])
@Component(".container__section__input")
export class InputComponent implements Component<HTMLInputElement> {
  viewRef: HTMLInputElement;
  imageComponent: ImageComponent;
  counterComponent: CounterComponent;

  constructor(
    counterComponent: CounterComponent,
    imageComponent: ImageComponent
  ) {
    this.counterComponent = counterComponent;
    this.imageComponent = imageComponent;
  }

  public inputControl() {
    this.viewRef.setAttribute("maxLength", `${Settings.maxLimit}`);
    this.counterComponent.update(this.viewRef.value.length);
  }

  protected focusEvent() {
    this.inputControl();
  }

  protected inputEvent() {
    this.inputControl();
    this.imageComponent.generateQRCode(this.viewRef.value);
  }
}
