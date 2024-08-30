import QRCode from "/core/qrcode";
import { Component, EventListener, Inject } from "/core";
import { Settings } from "/service/settings.service";

@Component({ selector: ".container__image" })
export class ImageComponent {
 @Inject(Settings) settings;
 
 get src() {
  return this.viewRef.getAttribute("src")
 }
 
 get title() {
  return this.viewRef.getAttribute("title")
 }

 generateQRCode = async (text: string) => {
  const blob = await QRCode.toDataURL(
   text || this.settings.default,
   this.settings.imageConfig,
  );

  Object.assign(this.viewRef, {
   src: blob,
   title: text.length > 0
   ? `${text}.${this.settings.ext}`
   : `${this.settings.default}.${this.settings.ext}`
  });
 };

 @EventListener("contextmenu")
 contextMenuController(event: PointerEvent) {
  event.preventDefault();
 }
}
