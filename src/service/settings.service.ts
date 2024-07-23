import { Service } from '@core/service';
import { QRCodeToDataURLOptions } from "qrcode";

@Service
export class Settings {
   maxLimit = 50;
   default = "null";
   imageConfig: QRCodeToDataURLOptions = {
    margin: 1,
    errorCorrectionLevel: "L",
    width: 250,
    type: "image/webp",
  };
}
