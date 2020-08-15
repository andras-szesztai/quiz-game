import React from "react"
import gsap from "gsap"

import { pulsate } from "../utils"

function useInitialize(buttonRef: HTMLButtonElement | null) {
  const [isInitialized, setIsInitialized] = React.useState(false)
  React.useEffect(() => {
    // MotionPathHelper.create("#indicator", {
    //   path: "#path-5",
    //   pathOpacity: 0.2,
    //   alignOrigin: [0.5, 0.5],
    //   start: 1,
    //   end: 1,
    //   duration: 1,
    // })
    gsap
      .timeline({ defaults: { ease: "back.out(1.9)", duration: 0.5 } })
      .set(".star", { scale: 0, x: 12, y: 10 })
      .set(".correct-icon", { scale: 0 })
      .set(".false-icon", { scale: 0 })
      .set("#title", { opacity: 0, y: 100 })
      .set("#intro", { opacity: 0, y: 75 })
      .set("#indicator", { scale: 0 })
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
      })
  }, [buttonRef, setIsInitialized])

  return isInitialized
}

export default useInitialize
