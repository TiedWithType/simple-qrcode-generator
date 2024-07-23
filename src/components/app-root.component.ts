import { Component } from "@core/component";
import { DownloadComponent } from "@components/download.component";
import { InputComponent } from "@components/input.component";
import { CounterComponent } from "./counter.component";

@Component({
  selector: "body",
  dependencies: [DownloadComponent, InputComponent],
})
export class AppRootComponent implements Component<HTMLBodyElement> {
  constructor(
    private downloadComponent: DownloadComponent,
    public view: HTMLBodyElement
  ) {
    this.downloadComponent.enableDownload(false);
  }
}