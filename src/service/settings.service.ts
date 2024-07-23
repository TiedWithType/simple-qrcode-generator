import { QRCodeToDataURLOptions } from "qrcode";

export class Settings {
  static maxLimit = 50;
  static default = "null";
  static imageConfig: QRCodeToDataURLOptions = {
    margin: 1,
    errorCorrectionLevel: "L",
    width: 250,
    type: "image/webp",
  };
}
