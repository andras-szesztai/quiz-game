import React from "react"
import gsap from "gsap"

import { useDeviceType } from "."

function useInitialize(buttonRef: HTMLButtonElement | null) {
  const [isInitialized, setIsInitialized] = React.useState(false)
  const device = useDeviceType()
  React.useEffect(() => {
    if (device !== "mobile") {
      gsap
        .timeline({ defaults: { ease: "back.out(1.9)", duration: 0.5 } })
        .set(".star", { scale: 0, x: 12, y: 10 })
        .set(".correct-icon", { scale: 0 })
        .set(".false-icon", { scale: 0 })
        .set(".intro-element", { opacity: 0, y: 100 })
        .set("#indicator", { scale: 0 })
        .set("svg", {visibility: "visible"})
        .set(buttonRef, {
          motionPath: {
            path: `#path-1`,
            align: `#path-1`,
            alignOrigin: [0.5, 0.5],
            end: 0,
          },
        })
        .to(".star", {
          scale: 1,
          duration: 1,
          transformOrigin: "46% 46%",
          ease: "elastic.out(1, 0.4)",
          stagger: {
            amount: 0.8,
            from: "end",
          },
        })
        .to("#title", { y: 0, opacity: 1 }, "-=.8")
        .to("#intro", { y: 0, opacity: 1 }, "-=.4")
        .to("#intro-button", { y: 0, opacity: 1 }, "-=.2")
        .set("#indicator", {
          motionPath: {
            path: "#path-1",
            align: "#path-1",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 0,
          },
          scale: 0,
        })
        .to("#indicator", {
          transformOrigin: "50%",
          scale: 1,
          onComplete: () => setIsInitialized(true),
        })
    }
  }, [buttonRef, device, setIsInitialized])

  return isInitialized
}

export default useInitialize
