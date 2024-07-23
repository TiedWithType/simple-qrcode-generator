import { Component } from "@core/component";
import { ImageComponent } from "@components/image.component";

@Component({
  selector: ".container__section__button",
  dependencies: [ImageComponent],
})
export class DownloadComponent implements Component<HTMLAnchorElement> {
  constructor(
    private imageComponent: ImageComponent,
    private stateClass: string,
    public view: HTMLAnchorElement
  ) {
    this.stateClass = 'container__section__button__enabled';
  }

  enableDownload(state: boolean) {
    this.view.classList.toggle(this.stateClass, state)
  }

  protected clickEvent() {
    this.view.classList.contains(this.stateClass)
      ? Object.assign(this.view, {
          href: this.imageComponent.view.getAttribute("src"),
          download: this.imageComponent.view.getAttribute("title"),
        })
      : this.view.removeAttribute("href");
  }
}
