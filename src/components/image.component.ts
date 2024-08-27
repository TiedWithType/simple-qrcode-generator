import QRCode from "/deps/qrcode";
import { Component, EventListener } from "/core/core";
import { Settings } from "../service/settings.service";

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
   title: text.length > 0 ? `${text}.webp` : "null.webp"
  });
 };

 @EventListener("contextmenu") protected handleContextMenu(event: PointerEvent) {
  event.preventDefault();
 }
}
