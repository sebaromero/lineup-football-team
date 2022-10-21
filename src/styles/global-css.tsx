import { createGlobalStyle } from "styled-components";

import HindSiliguriBold from "../assets/fonts/HindSiliguri-Bold.ttf";
import HindSiliguriLight from "../assets/fonts/HindSiliguri-Light.ttf";
import HindSiliguriMedium from "../assets/fonts/HindSiliguri-Medium.ttf";
import HindSiliguriRegular from "../assets/fonts/HindSiliguri-Regular.ttf";
import HindSiliguriSemiBold from "../assets/fonts/HindSiliguri-SemiBold.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: "HindSiliguri-Bold";
    src: url(${HindSiliguriBold}) format("truetype");
  }
  @font-face {
    font-family: "HindSiliguri-Light";
    src: url(${HindSiliguriLight}) format("truetype");
  }
  @font-face {
    font-family: "HindSiliguri-Medium";
    src: url(${HindSiliguriMedium}) format("truetype");
  }
  @font-face {
    font-family: "HindSiliguri-Regular";
    src: url(${HindSiliguriRegular}) format("truetype");
  }
  @font-face {
    font-family: "HindSiliguri-SemiBold";
    src: url(${HindSiliguriSemiBold}) format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
  }
`;
