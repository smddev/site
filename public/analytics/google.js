import {GOOGLE_ANALYTICS_KEY} from "../../src/utils";

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', GOOGLE_ANALYTICS_KEY);
