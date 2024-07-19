import { Component } from "@core/component";
import { DownloadComponent } from "@components/download.component";
import { InputComponent } from "@components/input.component";
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

@Component({
  selector: "body",
  dependencies: [DownloadComponent, InputComponent],
})
export class AppRootComponent implements Component<HTMLBodyElement> {
  constructor(
    private downloadComponent: DownloadComponent,
    public view: HTMLBodyElement
  ) {
    this.downloadComponent.stateControl("disabled");
  }
}
