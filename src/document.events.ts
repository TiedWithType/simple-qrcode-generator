import { $, onEvents, updateCounter } from "./utils";

@onEvents("document")
export class DocumentEvents {
  public maxLimit = 30;

  DOMContentLoaded() {
    $("input").setAttribute("maxLength", this.maxLimit.toString());
    updateCounter(0, this.maxLimit);
  }
}
