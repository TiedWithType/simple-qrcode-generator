import { DocumentEvents } from "./document.events";
import { $, onEvents, createQrCode, updateCounter } from "./utils";

@onEvents(".container__section__input")
export class QrTextEvents {
  private default = "null";
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

    $("img").setAttribute("src", createQrCode(value, this.default));

    ["alt", "title"].forEach((attr) => {
      $("img").setAttribute(attr, value);
    });
  }
}
