import { Component } from "@core/component";
import { CounterComponent } from "@components/counter.component";
import { ImageComponent } from "@components/image.component";
import { DownloadComponent } from "@components/download.component";
import { Settings } from "@service/settings.service";
import { EventEmitter } from "@core/event.emitter";

@Component({
 selector: ".container__section__input",
 dependencies: [CounterComponent, ImageComponent, DownloadComponent],
})
export class InputComponent implements Component<HTMLInputElement> {
 constructor(
  private counterComponent: CounterComponent,
  private imageComponent: ImageComponent,
  private download: DownloadComponent,
  private settings: Settings,
  public view: HTMLInputElement,
 ) {
  this.settings = new Settings();
 }

 generatePlaceholder(): void {
  this.view.setAttribute(
   "placeholder",
   this.settings.placeholders[
    Math.floor(Math.random() * this.settings.placeholders.length)
   ],
  );
 }

 public inputControl() {
  this.view.setAttribute("maxLength", `${this.settings.maxLimit}`);
  this.counterComponent.update(this.view.value.length);

  this.download.enableDownload(!this.view.validity.valueMissing);
 }

 @EventEmitter("focus") protected handleFocus() {
  this.inputControl();
  this.generatePlaceholder();
 }

 @EventEmitter("input") protected async handleInput() {
  await this.imageComponent.generateQRCode(this.view.value);
  this.inputControl();
 }
}
