import { Service } from "/core/service";

@Service
export class Settings {
 ext = "webp";
 maxLimit = 100;
 default = "null";
 imageConfig = {
  margin: 1,
  errorCorrectionLevel: "Q",
  width: 250,
  type: `image/${this.ext}`,
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
