import QRCode from "qrcode";
import { Component } from "@core/component";
import { Settings } from "@components/app-root.component";

@Component({ selector: ".container__image" })
export class ImageComponent implements Component<HTMLImageElement> {
  constructor(public view: HTMLImageElement) {}

  attribute(name: string, value?: any): string {
    return value
      ? (this.view.setAttribute as any)(name, value)
      : this.view.getAttribute(name);
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
