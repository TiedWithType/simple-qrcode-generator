import QRCode from "qrcode";
import { Component } from "../component";
import { Settings } from "./app-root.component";

@Component({ selector: ".container__image" })
export class ImageComponent implements Component<HTMLImageElement> {
  constructor(public viewRef: HTMLImageElement) {}

  attribute(name: string, value?: any): string {
    return value
      ? (this.viewRef.setAttribute as any)(name, value)
      : this.viewRef.getAttribute(name);
  }

  generateQRCode = async (text: string) => {
    const blob = await QRCode.toDataURL(
      text || Settings.default,
      Settings.imageConfig
    );

    this.attribute("src", blob);
    this.attribute("title", `${text}.webp`);
  };
}
