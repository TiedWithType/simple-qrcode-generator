import { $, onEvents, createQrCode, updateCounter } from "./utils";

@onEvents(".container__section__input")
export class QrTextEvents {
  input({ value, maxLength }): void {
    updateCounter(value.length, maxLength);

    $("img").setAttribute("src", createQrCode(value, "QrCode"));

    ["alt", "title"].forEach((attr) => {
      $("img").setAttribute(attr, value);
    });
  }
}
