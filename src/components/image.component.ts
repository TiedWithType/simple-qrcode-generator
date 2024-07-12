import QRCode from "qrcode";
import { Component } from "../component";
import { Settings } from "./document.component";

@Component(".container__image")
export class ImageComponent implements Component<HTMLImageElement> {
  viewRef: HTMLImageElement;
  imageTitle: string;

  get title() {
    return this.viewRef.getAttribute("title");
  }

  get src() {
    return this.viewRef.getAttribute("src");
  }

  generateQRCode = async (text: string) => {
    let blob = await QRCode.toDataURL(text || Settings.default, {
      margin: 0.1,
      errorCorrectionLevel: "L",
      width: 400,
    });

    this.viewRef.setAttribute("src", blob);
    this.viewRef.setAttribute("title", `${text}.png`);
  };
}
