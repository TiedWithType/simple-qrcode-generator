import { Component } from "@core/component";
import { Settings } from "@components/app-root.component";
import { ImageComponent } from "@components/image.component";

@Component({
  selector: ".container__section__button",
  dependencies: [ImageComponent],
})
export class DownloadComponent implements Component<HTMLAnchorElement> {
  constructor(
    private imageComponent: ImageComponent,
    public view: HTMLAnchorElement
  ) {}

  stateControl(state: string) {
    if (state == "enabled") {
      this.view.classList.remove("container__section__button__disabled");
      this.view.setAttribute("canDownload", "true");
    } else if (state == "disabled") {
      this.view.classList.add("container__section__button__disabled");
      this.view.setAttribute("canDownload", "false");
    }
  }

  protected clickEvent() {
    if (this.view.getAttribute("canDownload") === "true") {
      this.view.setAttribute("href", this.imageComponent.attribute("src"));
      this.view.setAttribute(
        "download",
        `${this.imageComponent.attribute("title") || Settings.default}`
      );
    } else {
      this.view.removeAttribute("href");
      this.view.removeAttribute("download");
    }
  }
}
