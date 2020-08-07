import React from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { usePrevious } from "react-use"

import "./App.css"

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(MorphSVGPlugin)

// Morphed circle
// M35,12.2c0,6.4-5.2,11.7-11.7,11.7S0.5,18.6,0.5,12.2S16.9,0.5,23.3,0.5S35,5.7,35,12.2z

// Circle
// M23.8,12.2c0,6.4-5.2,11.7-11.7,11.7S0.5,18.6,0.5,12.2S5.7,0.5,12.2,0.5S23.8,5.7,23.8,12.2z

// hit
// M15,12.2c0,6.4-5.2,11.7-11.7,11.7s0-5.2,0-11.7s-6.4-11.7,0-11.7S15,5.7,15,12.2z

// Tick
// M42.5,0.8L14.5,23.5L6.4,12c-1.1-1.6-3.3-2-4.9-0.8c-1.6,1.1-1.9,3.3-0.8,4.9l10.3,14.5
// c0.6,0.8,1.4,1.3,2.4,1.5c0.2,0,0.3,0,0.5,0c0.8,0,1.6-0.3,2.2-0.8l31-25c1.5-1.2,1.7-3.4,0.5-4.9C46.2-0.2,44-0.4,42.5,0.8z

// Close
// M16.2,11.6L5.5,0.9c-1.3-1.3-3.3-1.3-4.6,0s-1.3,3.3,0,4.6l10.7,10.7L0.9,26.8c-1.3,1.3-1.3,3.3,0,4.6
// c1.3,1.3,3.3,1.3,4.6,0l10.7-10.7l10.7,10.7c1.3,1.3,3.3,1.3,4.6,0c1.3-1.3,1.3-3.3,0-4.6L20.7,16.2L31.4,5.5
// c1.3-1.3,1.3-3.3,0-4.6c-1.3-1.3-3.3-1.3-4.6,0L16.2,11.6z

function App() {
  const [position, setPosition] = React.useState(0)
  const prevPosition = usePrevious(position)

  React.useEffect(() => {
    if (position > 0) {
      gsap.to("#circle", {
        keyframes: [
          {
            morphSVG:
              "M35,12.2c0,6.4-5.2,11.7-11.7,11.7S0.5,18.6,0.5,12.2S16.9,0.5,23.3,0.5S35,5.7,35,12.2z",
            duration: 0.3,
          },
          {
            morphSVG:
              "M23.8,12.2c0,6.4-5.2,11.7-11.7,11.7S0.5,18.6,0.5,12.2S5.7,0.5,12.2,0.5S23.8,5.7,23.8,12.2z",
            duration: 0.3,
            ease: "elastic.out(1, .75)",
          },
        ],
      })
      gsap.to("#icon", {
        keyframes: [
          {
            morphSVG:
              "M23.8,12.2c0,6.4-5.2,11.7-11.7,11.7S0.5,18.6,0.5,12.2S5.7,0.5,12.2,0.5S23.8,5.7,23.8,12.2z",
            duration: 0.5,
          },
          {
            morphSVG:
              position % 2
                ? "M42.5,0.8L14.5,23.5L6.4,12c-1.1-1.6-3.3-2-4.9-0.8c-1.6,1.1-1.9,3.3-0.8,4.9l10.3,14.5c0.6,0.8,1.4,1.3,2.4,1.5c0.2,0,0.3,0,0.5,0c0.8,0,1.6-0.3,2.2-0.8l31-25c1.5-1.2,1.7-3.4,0.5-4.9C46.2-0.2,44-0.4,42.5,0.8z"
                : "M16.2,11.6L5.5,0.9c-1.3-1.3-3.3-1.3-4.6,0s-1.3,3.3,0,4.6l10.7,10.7L0.9,26.8c-1.3,1.3-1.3,3.3,0,4.6 c1.3,1.3,3.3,1.3,4.6,0l10.7-10.7l10.7,10.7c1.3,1.3,3.3,1.3,4.6,0c1.3-1.3,1.3-3.3,0-4.6L20.7,16.2L31.4,5.5 c1.3-1.3,1.3-3.3,0-4.6c-1.3-1.3-3.3-1.3-4.6,0L16.2,11.6z",
            duration: 0.5,
          },
        ],
      })
    }
    gsap.to("#circle", {
      duration: 0.4,
      ease: "power1.inOut",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: (prevPosition || 0) * 0.1,
        end: position * 0.1,
      },
    })
  }, [position, prevPosition])

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() =>
            setPosition((prev) => {
              if (prev === 9) {
                return 0
              } else {
                return prev + 1
              }
            })
          }
        >
          Move me
        </button>
        <svg
          x="0px"
          y="0px"
          width="800px"
          height="800px"
          viewBox="0 0 273.3 273.3"
        >
          <path
            id="path"
            fill="#FFF"
            stroke="#000"
            d="M136.7,13.4c68.1,0,123.3,55.2,123.3,123.3s-55.2,123.3-123.3,123.3S13.4,204.7,13.4,136.7
            S68.6,13.4,136.7,13.4"
          />
          <path
            id="circle"
            d="M23.8,12.2c0,6.4-5.2,11.7-11.7,11.7S0.5,18.6,0.5,12.2S5.7,0.5,12.2,0.5S23.8,5.7,23.8,12.2z"
          />

          <path
            id="icon"
            d="M42.5,0.8L14.5,23.5L6.4,12c-1.1-1.6-3.3-2-4.9-0.8c-1.6,1.1-1.9,3.3-0.8,4.9l10.3,14.5
              c0.6,0.8,1.4,1.3,2.4,1.5c0.2,0,0.3,0,0.5,0c0.8,0,1.6-0.3,2.2-0.8l31-25c1.5-1.2,1.7-3.4,0.5-4.9C46.2-0.2,44-0.4,42.5,0.8z"
          />
        </svg>
      </header>
    </div>
  )
}

export default App
