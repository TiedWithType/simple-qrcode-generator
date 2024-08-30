import { Component, EventListener } from "/core";
import { DownloadComponent } from "./download.component";
import { InputComponent } from "./input.component";

@Component({
 selector: "body",
 dependencies: [DownloadComponent, InputComponent],
})
export class AppRootComponent {
 init() {
  this.InputComponent.generatePlaceholder();
 }
}
