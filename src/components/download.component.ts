import { Component } from "../component";
import { Settings } from "./document.component";
import { ImageComponent } from "./image.component";

@Component({
  selector: ".container__section__button",
  inject: [ImageComponent],
})
export class DownloadComponent implements Component<HTMLAnchorElement> {
  viewRef: HTMLAnchorElement;
  image: ImageComponent;

  constructor(imageComponent: ImageComponent) {
    this.image = imageComponent;
  }

  stateControl(state: string) {
    if (state == "enabled") {
      this.viewRef.classList.remove("container__section__button__disabled");
      this.viewRef.setAttribute("canDownload", "true");
    } else if (state == "disabled") {
      this.viewRef.classList.add("container__section__button__disabled");
      this.viewRef.setAttribute("canDownload", "false");
    }
  }

  protected clickEvent() {
    if (this.viewRef.getAttribute("canDownload") === "true") {
      this.viewRef.setAttribute("href", this.image.src);
      this.viewRef.setAttribute(
        "download",
        `${this.image.title || Settings.default}`
      );
    } else {
      this.viewRef.removeAttribute("href");
      this.viewRef.removeAttribute("download");
    }
  }
}
