import { InputComponent } from "./input.component";
import { Component } from "../component";
import { DownloadComponent } from "./download.component";
import { QRCodeToDataURLOptions } from "qrcode";

export class Settings {
  static maxLimit = 30;
  static default = "null";
  static imageConfig: QRCodeToDataURLOptions = {
    margin: 1,
    errorCorrectionLevel: "L",
    width: 250,
    type: "image/webp",
  };
}

@Component({ selector: "body", inject: [DownloadComponent, InputComponent] })
export class AppRootComponent implements Component<HTMLBodyElement> {
  constructor(
    private downloadComponent: DownloadComponent,
    public viewRef: HTMLBodyElement
  ) {
    this.downloadComponent.stateControl("disabled");
  }
}
