import { Component } from "../component";
import { Settings } from "./document.component";
import { ImageComponent } from "./image.component";

@Component(".container__section__button")
export class DownloadComponent implements Component<HTMLAnchorElement> {
  viewRef: HTMLAnchorElement;
  image = new ImageComponent();

  clickEvent() {
    this.viewRef.setAttribute("href", this.image.src);
    this.viewRef.setAttribute(
      "download",
      `${this.image.title || Settings.default}`
    );
  }
}
