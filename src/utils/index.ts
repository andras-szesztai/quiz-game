import gsap from "gsap"

export const pulsate = (delay = 0) => {
  gsap.to("#indicator", {
    keyframes: [{ scale: 1.2 }, { scale: 1 }],
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    delay,
    ease: "power1.inOut",
  })
}

export const stopPulsate = () => {
  gsap.killTweensOf("#indicator", "scale")
  gsap.to("#indicator", {
    scale: 1,
    duration: 0.5,
    ease: "power1.inOut",
  })
}