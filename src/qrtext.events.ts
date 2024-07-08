import { DocumentEvents } from "./document.events";
import { $, onEvents, updateCounter, generateQRCode } from "./utils";

@onEvents(".container__section__input")
export class QrTextEvents {
  private target: any;
  maxLength: number;

  constructor(target: any) {
    this.target = target;
    this.maxLength = new DocumentEvents().maxLimit;
  }

  focus({ value, maxLength }) {
    this.target.setAttribute("maxLength", this.maxLength);
    updateCounter(value.length, maxLength);
  }

  input({ value, maxLength }): void {
    this.target.setAttribute("maxLength", this.maxLength);
    updateCounter(value.length, maxLength);

    generateQRCode(value).then(url => {
      $('img').setAttribute('src', url);
    });

    ["alt", "title"].forEach((attr) => {
      $("img").setAttribute(attr, value);
    });
  }
}
