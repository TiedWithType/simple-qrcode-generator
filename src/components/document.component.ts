import { InputComponent } from "./input.component";
import { Component } from "../component";
import { DownloadComponent } from "./download.component";

export class Settings {
  static maxLimit = 30;
  static default = "null";
}

@Component("document")
export class DocumentComponent implements Component<Document> {
  viewRef: Document;
  inputComponent: InputComponent = new InputComponent();

  DOMContentLoadedEvent() {
    this.inputComponent.inputControl();
  }

  init() {
    new DownloadComponent();
  }
}
