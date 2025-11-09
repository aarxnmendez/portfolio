import Lenis from "lenis";
import "lenis/dist/lenis.css";

const getOffset = () => {
  return window.innerWidth >= 1080 ? -100 : -80;
};

let lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
  autoRaf: true,
  anchors: {
    offset: getOffset(),
  },
});

let resizeTimeout: number;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = window.setTimeout(() => {
    const currentOffset = getOffset();
    lenis.destroy();
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: true,
      anchors: {
        offset: currentOffset,
      },
    });
  }, 250);
});

export { lenis };
