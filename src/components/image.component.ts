import QRCode from "qrcode";
import { Component } from "@core/component";
import { Settings } from "@service/settings.service";

@Component({ selector: ".container__image" })
export class ImageComponent implements Component<HTMLImageElement> {
  constructor(public view: HTMLImageElement) {}

  generateQRCode = async (text: string) => {
    const blob = await QRCode.toDataURL(
      text || Settings.default,
      Settings.imageConfig
    );

    Object.assign(this.view, {
      src: blob,
      title: `${text}.webp`
    })
  };
}
