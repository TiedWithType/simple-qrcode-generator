import { Component } from "@core/component";
import { CounterComponent } from "@components/counter.component";
import { ImageComponent } from "@components/image.component";
import { DownloadComponent } from "@components/download.component";
import { Settings } from "@service/settings.service";

@Component({
  selector: ".container__section__input",
  dependencies: [CounterComponent, ImageComponent, DownloadComponent],
})
export class InputComponent implements Component<HTMLInputElement> {
  constructor(
    private counterComponent: CounterComponent,
    private imageComponent: ImageComponent,
    private download: DownloadComponent,
    public view: HTMLInputElement
  ) {}

  public inputControl() {
    this.view.setAttribute("maxLength", `${Settings.maxLimit}`);
    this.counterComponent.update(this.view.value.length);

    this.view.value.length > 0
      ? (this.download.stateControl("enabled"))
      : this.download.stateControl("disabled");
  }

  protected focusEvent() {
    this.inputControl();
  }

  protected async inputEvent() {
    await this.imageComponent.generateQRCode(this.view.value);
    this.inputControl();
  }
}
