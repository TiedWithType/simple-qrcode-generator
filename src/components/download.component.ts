import { Component, EventListener } from "/core";
import { ImageComponent } from "./image.component";

@Component({
 selector: ".container__section__button",
 dependencies: [ImageComponent],
})
export class DownloadComponent {
 enableDownload(state: boolean) {
  this.viewRef.toggleAttribute("data-enabled", state);
 }

 @EventListener("click") clickController() {
  const { src, title } = this.ImageComponent;
 
  this.viewRef.getAttribute("data-enabled") !== null
   ? Object.assign(this.viewRef, {
      href: src,
      download: title,
     })
   : this.viewRef.removeAttribute("href");
 }
}
