import QRCode from "qrcode";

export const $ = (selector: string): HTMLElement =>
  selector == "document"
    ? (document as any)
    : document.querySelector<HTMLElement>(selector);

export const onEvents =
  (selector: string) =>
  (target: Function): any => {
    let elem = $(selector);
    let instance = Reflect.construct(target, [elem]);

    Object.assign(target.prototype, instance);

    Reflect.ownKeys(target.prototype).forEach((key: string) => {
      if (key == "constructor") {
        return;
      }

      elem.addEventListener(key, (event) => {
        target.prototype[key](event.target);
      });
    });

    return target;
  };

export const updateCounter = (current: number, max: number) => {
  $(".container__section__counter").textContent = `${current} / ${max}`;
};

/***@deprecated use async function generateQRCode */
export const createQrCode = (data: string, initial: string = "null") =>
  `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURI(
    data || initial
  )}&size=200`;

export const classRunner = (list: Function[]) => [...list].forEach((e) => e);

export const generateQRCode = async (
  text: string,
  initial: string = "null"
): Promise<any> => {
  try {
    const options = {
      width: "200",
      height: "200",
      margin: "1",
      errorCorrectionLevel: "L",
    };

    const url = QRCode.toDataURL(text || initial, options);
    return url;
  } catch (error) {
    throw new Error(`Nie udało się wygenerować kodu QR: ${error}`);
  }
};
