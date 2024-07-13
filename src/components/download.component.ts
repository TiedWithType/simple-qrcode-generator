import { Component } from "../component";
import { Inject } from "../inject";
import { Settings } from "./document.component";
import { ImageComponent } from "./image.component";

@Inject([ImageComponent])
@Component(".container__section__button")
export class DownloadComponent implements Component<HTMLAnchorElement> {
  viewRef: HTMLAnchorElement;
  image: ImageComponent;

  constructor(imageComponent: ImageComponent) {
    this.image = imageComponent;
  }

  protected clickEvent() {
    this.viewRef.setAttribute("href", this.image.src);
    this.viewRef.setAttribute(
      "download",
      `${this.image.title || Settings.default}`
    );
  }
}
