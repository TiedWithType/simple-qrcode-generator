import { $, onEvents, createQrCode, updateCounter } from "./utils";

@onEvents("document")
export class DocumentEvents {
  DOMContentLoaded(self: Document) {
    const maxLimit = 20;

    $("input").setAttribute("maxLength", maxLimit.toString());

    updateCounter(0, maxLimit);
  }
}
