import { InputComponent } from "./input.component";
import { Component } from "../component";
import { DownloadComponent } from "./download.component";
import { Inject } from "../inject";

export class Settings {
  static maxLimit = 30;
  static default = "null";
}

@Inject([DownloadComponent, InputComponent])
@Component("document")
export class DocumentComponent implements Component<Document> {
  viewRef: Document;
  downloadComponent: DownloadComponent;

  constructor(downloadComponent: DownloadComponent) {
    this.downloadComponent = downloadComponent;
  }
}
