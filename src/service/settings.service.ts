import { Service } from '@core/service';
import { QRCodeToDataURLOptions } from "qrcode";

@Service
export class Settings {
  maxLimit = 50;
  default = "null";
  imageConfig: QRCodeToDataURLOptions = {
    margin: 1,
    errorCorrectionLevel: "Q",
    width: 250,
    type: "image/webp",
   
  };
  placeholders: string[] = [
    "Oops! Something missing :(",
    "Insert something witty here!",
    "A placeholder with style.",
    "Make this spot sparkle!",
    "Text goes here... maybe.",
    "Your idea goes here!",
    "A bit of magic, perhaps?",
    "Put something clever here.",
    "This space needs you!",
    "Just a fun placeholder!",
  ];
}
