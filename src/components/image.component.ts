import QRCode from "/core/qrcode";
import { Component, EventListener } from "/core";
import { Settings } from "/service/settings.service";

@Component({ selector: ".container__image" })
export class ImageComponent {
 constructor(private settings: Settings) {
  this.settings = new Settings();
 }

 generateQRCode = async (text: string) => {
  const blob = await QRCode.toDataURL(
   text || this.settings.default,
   this.settings.imageConfig,
  );

  Object.assign(this.viewRef, {
   src: blob,
   title: text.length > 0 ? `${text}.${this.settings.ext}` : `${this.settings.default}.${this.settings.ext}`
  });
 };

 @EventListener("contextmenu") protected handleContextMenu(event: PointerEvent) {
  event.preventDefault();
 }
}
