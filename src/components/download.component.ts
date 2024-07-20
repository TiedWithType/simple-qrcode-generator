import { Component } from "@core/component";
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
      this.view.classList.add("container__section__button__enabled");
      this.view.setAttribute("candownload", "true");
    } else if (state == "disabled") {
      this.view.classList.remove("container__section__button__enabled");
      this.view.setAttribute("candownload", "false");
    }
  }

  protected clickEvent() {
    this.view.getAttribute("candownload") === "true"
      ? Object.assign(this.view, {
          href: this.imageComponent.view.getAttribute("src"),
          download: this.imageComponent.view.getAttribute("title"),
        })
      : this.view.removeAttribute("href");
  }
}
