import { Component } from "../component";
import { Settings } from "./app-root.component";
import { ImageComponent } from "./image.component";

@Component({
  selector: ".container__section__button",
  inject: [ImageComponent],
})
export class DownloadComponent implements Component<HTMLAnchorElement> {
  constructor(
    private imageComponent: ImageComponent,
    public viewRef: HTMLAnchorElement
  ) {}

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
      this.viewRef.setAttribute("href", this.imageComponent.attribute('src'));
      this.viewRef.setAttribute(
        "download",
        `${this.imageComponent.attribute('title') || Settings.default}`
      );
    } else {
      this.viewRef.removeAttribute("href");
      this.viewRef.removeAttribute("download");
    }
  }
}
