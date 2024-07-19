import { CounterComponent } from "./counter.component";
import { Settings } from "./app-root.component";
import { Component } from "../component";
import { ImageComponent } from "./image.component";
import { DownloadComponent } from "./download.component";

@Component({
  selector: ".container__section__input",
  inject: [CounterComponent, ImageComponent, DownloadComponent],
})
export class InputComponent implements Component<HTMLInputElement> {

  constructor(
    private counterComponent: CounterComponent,
    private imageComponent: ImageComponent,
    private download: DownloadComponent,
    public viewRef: HTMLInputElement
  ) {}

  public inputControl() {
    this.viewRef.setAttribute("maxLength", `${Settings.maxLimit}`);
    this.counterComponent.update(this.viewRef.value.length);

    this.viewRef.value.length > 0
      ? this.download.stateControl("enabled")
      : this.download.stateControl("disabled");
  }

  protected focusEvent() {
    this.inputControl();
  }

  protected inputEvent() {
    this.inputControl();
    this.imageComponent.generateQRCode(this.viewRef.value);
  }
}
