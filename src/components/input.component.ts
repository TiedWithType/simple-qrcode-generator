import { Component, EventListener, Inject } from "/core";
import { CounterComponent } from "./counter.component";
import { ImageComponent } from "./image.component";
import { DownloadComponent } from "./download.component";
import { Settings } from "/service/settings.service";

@Component({
 selector: ".container__section__input",
 dependencies: [CounterComponent,
 ImageComponent, DownloadComponent],
})
export class InputComponent {
 @Inject(Settings) settings;

 generatePlaceholder(): void {
  this.viewRef.setAttribute(
   "placeholder", this.settings.randomPlaceholder());
 }
 
 get value() {
  return this.viewRef.value;
 }
 
 get valueMissing() {
  return this.viewRef.validity.valueMissing;
 }

 @EventListener("focus") focusController() {
  this.generatePlaceholder();
 }

 @EventListener("input") async inputController() {
  await this.ImageComponent.generateQRCode(this.value);
  this.CounterComponent.update(this.value.length);
  this.DownloadComponent.enableDownload(!this.valueMissing);
 }
}
