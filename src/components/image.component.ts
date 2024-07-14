import QRCode from "qrcode";
import { Component } from "../component";
import { Settings } from "./document.component";

@Component(".container__image")
export class ImageComponent implements Component<HTMLImageElement> {
  viewRef: HTMLImageElement;

  get title() {
    return this.viewRef.getAttribute("title");
  }

  get src() {
    return this.viewRef.getAttribute("src");
  }

  generateQRCode = async (text: string) => {
    const blob = await QRCode.toDataURL(text || Settings.default, {
      margin: 0.1,
      errorCorrectionLevel: "L",
      width: 400,
      type: "image/webp"
    });

    this.viewRef.setAttribute("src", blob);
    this.viewRef.setAttribute("title", `${text}.webp`);
  };
}
