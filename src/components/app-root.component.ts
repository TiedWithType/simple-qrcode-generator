import { Component } from "@core/core";
import { DownloadComponent } from "./download.component";
import { InputComponent } from "./input.component";

@Component({
 selector: "body",
 dependencies: [DownloadComponent, InputComponent],
})
export class AppRootComponent {
 constructor(
  private downloadComponent: DownloadComponent,
  private inputComponent: InputComponent,
 ) {
  this.downloadComponent.enableDownload(false);
  this.inputComponent.generatePlaceholder();
 }
}
