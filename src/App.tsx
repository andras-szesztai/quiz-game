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
        </svg>
      </header>
    </div>
  )
}

export default App
