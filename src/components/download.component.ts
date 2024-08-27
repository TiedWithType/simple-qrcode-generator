import { Component, EventListener } from "/core/core";
import { ImageComponent } from "./image.component";

@Component({
 selector: ".container__section__button",
 dependencies: [ImageComponent],
})
export class DownloadComponent {
 constructor(private imageComponent: ImageComponent) {}

 enableDownload(state: boolean) {
  this.viewRef.toggleAttribute("data-enabled", state);
 }

 @EventListener("click") protected handleClick() {
  this.viewRef.getAttribute("data-enabled") !== null
   ? Object.assign(this.viewRef, {
      href: this.imageComponent.viewRef.getAttribute("src"),
      download: this.imageComponent.viewRef.getAttribute("title"),
     })
   : this.viewRef.removeAttribute("href");
 }
}
