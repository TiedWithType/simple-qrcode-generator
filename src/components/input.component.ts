import { Component, EventListener} from "/core/core";
import { CounterComponent } from "./counter.component";
import { ImageComponent } from "./image.component";
import { DownloadComponent } from "./download.component";
import { Settings } from "../service/settings.service";

@Component({
 selector: ".container__section__input",
 dependencies: [CounterComponent, ImageComponent, DownloadComponent],
})
export class InputComponent {
 constructor(
  private counterComponent: CounterComponent,
  private imageComponent: ImageComponent,
  private download: DownloadComponent,
  private settings: Settings
 ) {
  this.settings = new Settings();
 }

 generatePlaceholder(): void {
  this.viewRef.setAttribute(
   "placeholder",
   this.settings.placeholders[
    Math.floor(Math.random() * this.settings.placeholders.length)
   ],
  );
 }

 public inputControl() {
  this.viewRef.setAttribute("maxLength", `${this.settings.maxLimit}`);
  this.counterComponent.update(this.viewRef.value.length);

  this.download.enableDownload(!this.viewRef.validity.valueMissing);
 }

 @EventListener("focus") protected handleFocus() {
  this.inputControl();
  this.generatePlaceholder();
 }

 @EventListener("input") protected async handleInput() {
  await this.imageComponent.generateQRCode(this.viewRef.value);
  this.inputControl();
 }
}
