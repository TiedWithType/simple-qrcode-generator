import { InputComponent } from "./input.component";
import { Component } from "../component";
import { DownloadComponent } from "./download.component";

export class Settings {
  static maxLimit = 30;
  static default = "null";
}

@Component({selector: 'body', inject: [DownloadComponent, InputComponent]})
export class DocumentComponent implements Component<Document> {
  viewRef: Document;
  downloadComponent: DownloadComponent;

  constructor(downloadComponent: DownloadComponent) {
    //this.downloadComponent = downloadComponent;
    downloadComponent.stateControl('disabled')
  }
}
