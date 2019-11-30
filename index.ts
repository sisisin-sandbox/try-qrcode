import * as QRCode from "qrcode";
import QrScanner from "qr-scanner";

async function main() {
  const result = await QRCode.toDataURL("https://zaicode-dev.web.app/books");
  console.log(result);

  const img = document.createElement("img");
  img.src = result;
  document.body.appendChild(img);

  const video = document.getElementById("scan") as HTMLVideoElement;
  navigator.getUserMedia(
    { audio: false, video: true },
    stream => {
      video.src = stream as any;
    },
    err => {
      console.log(err);
    }
  );
  // const qrScanner = new QrScanner(video, result =>
  //   console.log("decoded qr code:", result)
  // );
}
main().catch(console.error);
