import { Component } from "@core/component";
import { ImageComponent } from "@components/image.component";
import { EventEmitter } from "@core/event.emitter";

@Component({
  selector: ".container__section__button",
  dependencies: [ImageComponent],
})
export class DownloadComponent implements Component<HTMLAnchorElement> {
  constructor(
    private imageComponent: ImageComponent,
    public view: HTMLAnchorElement
  ) {}

  enableDownload(state: boolean) {
    this.view.toggleAttribute("data-enabled", state);
  }

  @EventEmitter('click') protected handleClick() {
    this.view.getAttribute("data-enabled") !== null
      ? Object.assign(this.view, {
          href: this.imageComponent.view.getAttribute("src"),
          download: this.imageComponent.view.getAttribute("title"),
        })
      : this.view.removeAttribute("href");
  }
}
