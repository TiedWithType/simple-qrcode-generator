import QRCode from "qrcode";
import { Component } from "@core/component";
import { Settings } from "@service/settings.service";

@Component({ selector: ".container__image", dependencies: [] })
export class ImageComponent implements Component<HTMLImageElement> {
  constructor(private settings: Settings, public view: HTMLImageElement) {
    this.settings = new Settings();
  }

  generateQRCode = async (text: string) => {
    const blob = await QRCode.toDataURL(
      text || this.settings.default,
      this.settings.imageConfig
    );

    Object.assign(this.view, {
      src: blob,
      title: `${text}.webp`
    })
  };
}
