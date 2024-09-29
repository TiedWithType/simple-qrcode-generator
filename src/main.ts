import { AppRootComponent } from "./components/app-root.component";

alert("This web app will be rewritten to new framework soon")

const agree = confirm("Do you agree to use this deprecated version?");

if (agree) AppRootComponent.init();
else {
 alert("You must confirm user agreement");
 window.location.href="/";
}
