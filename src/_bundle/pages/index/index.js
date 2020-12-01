import "./index.scss";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(".main__background-overlay", {
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "+=" + window.innerHeight,
      scrub: 0.5
    },
    immediateRender: false,
    opacity: 1,
  });
})


