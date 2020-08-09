/** @jsx jsx */
import React from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { MotionPathHelper } from "gsap/MotionPathHelper"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { usePrevious } from "react-use"
import { jsx, css } from "@emotion/core"
import chroma from "chroma-js"
import useWhatInput from "react-use-what-input"

import "./App.css"
import { buttonFocus, buttonNoFocus } from "./styles/theme"

const starColor = "#F9C750"
const bgColor = "#577590"
const svgDims = 900

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(MorphSVGPlugin)
gsap.registerPlugin(MotionPathHelper)
gsap.registerPlugin(DrawSVGPlugin)

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

// React.useEffect(() => {
//   if (position > 0) {
//     gsap.to("#circle", {
//       keyframes: [
//         {
//           morphSVG:
//             "M35,12.2c0,6.4-5.2,11.7-11.7,11.7S0.5,18.6,0.5,12.2S16.9,0.5,23.3,0.5S35,5.7,35,12.2z",
//           duration: 0.3,
//         },
//         {
//           morphSVG:
//             "M23.8,12.2c0,6.4-5.2,11.7-11.7,11.7S0.5,18.6,0.5,12.2S5.7,0.5,12.2,0.5S23.8,5.7,23.8,12.2z",
//           duration: 0.3,
//           ease: "elastic.out(1, .75)",
//         },
//       ],
//     })
//     gsap.to("#icon", {
//       keyframes: [
//         {
//           morphSVG:
//             "M23.8,12.2c0,6.4-5.2,11.7-11.7,11.7S0.5,18.6,0.5,12.2S5.7,0.5,12.2,0.5S23.8,5.7,23.8,12.2z",
//           duration: 0.5,
//         },
//         {
//           morphSVG:
//             position % 2
//               ? "M42.5,0.8L14.5,23.5L6.4,12c-1.1-1.6-3.3-2-4.9-0.8c-1.6,1.1-1.9,3.3-0.8,4.9l10.3,14.5c0.6,0.8,1.4,1.3,2.4,1.5c0.2,0,0.3,0,0.5,0c0.8,0,1.6-0.3,2.2-0.8l31-25c1.5-1.2,1.7-3.4,0.5-4.9C46.2-0.2,44-0.4,42.5,0.8z"
//               : "M16.2,11.6L5.5,0.9c-1.3-1.3-3.3-1.3-4.6,0s-1.3,3.3,0,4.6l10.7,10.7L0.9,26.8c-1.3,1.3-1.3,3.3,0,4.6 c1.3,1.3,3.3,1.3,4.6,0l10.7-10.7l10.7,10.7c1.3,1.3,3.3,1.3,4.6,0c1.3-1.3,1.3-3.3,0-4.6L20.7,16.2L31.4,5.5 c1.3-1.3,1.3-3.3,0-4.6c-1.3-1.3-3.3-1.3-4.6,0L16.2,11.6z",
//           duration: 0.5,
//         },
//       ],
//     })
//   }
//   gsap.to("#circle", {
//     duration: 0.4,
//     ease: "power1.inOut",
//     motionPath: {
//       path: "#path",
//       align: "#path",
//       autoRotate: true,
//       alignOrigin: [0.5, 0.5],
//       start: (prevPosition || 0) * 0.1,
//       end: position * 0.1,
//     },
//   })
// }, [position, prevPosition])

function App() {
  const [position, setPosition] = React.useState(0)
  const prevPosition = usePrevious(position)

  const [isInitialCompleted, setIsInitialCompleted] = React.useState(false)

  const [currentInput] = useWhatInput()

  React.useEffect(() => {
    // MotionPathHelper.create("#indicator", {
    //   path: "#path-2",
    //   pathOpacity: 0.2,
    //   alignOrigin: [0.5, 0.5],
    //   start: 0,
    //   end: 1,
    //   duration: 1,
    // })

    gsap
      .timeline({ defaults: { ease: "back.out(1.8)", duration: 0.5 } })
      .set(".star", { scale: 0, x: 12, y: 10 })
      .set("#title", { opacity: 0, y: 100 })
      .set("#intro", { opacity: 0, y: 75 })
      .set("#intro", { opacity: 0, y: 75 })
      .set("#indicator", { scale: 0 })
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
      })
      .to("#indicator", {
        transformOrigin: "50%",
        scale: 1,
        cursor: "pointer",
      })
      .to("#star-12", {
        cursor: "pointer",
      })
      .set("#indicator", { rotate: -90 })

    // gsap.to(buttonRef.current, {
    //   motionPath: {
    //     path: "#path-1",
    //     align: "#path-1",
    //     alignOrigin: [0.5, 0.5],
    //     start: 0,
    //     end: 1,
    //   },
    //   duration: 0.5,
    //   ease: "power4.inOut",
    // })

    // Timer animation
    // .from("#indicator", { drawSVG: "0%", ease: "none", duration: 20 })
    // .from(
    //   "#indicator",
    //   {
    //     duration: 0.5,
    //     ease: "power1.inOut",
    //     keyframes: [{ scale: 1.25 }, { scale: 1 }],
    //   },
    //   "-=5"
    // )

    // Move animation
    // .to("#indicator", {
    //   motionPath: {
    //     path: "#path-1",
    //     align: "#path-1",
    //     autoRotate: true,
    //     alignOrigin: [0.5, 0.5],
    //     start: 0,
    //     end: 1,
    //   },
    //   duration: 0.5,
    //   ease: "power4.inOut",
    // })
    // .to(
    //   "#indicator",
    //   {
    //     keyframes: [
    //       {
    //         morphSVG:
    //           "M246.9,53.2c0,11.5-9.3,15.1-20.7,15.1s-38.3-2.7-38.3-14.2s26.8-15.9,38.3-15.9S246.9,41.7,246.9,53.2z",
    //         duration: 0.4,
    //       },
    //       {
    //         morphSVG:
    //           "M238.2,53.3c0,11.5-9.3,20.8-20.8,20.8c-11.5,0-20.8-9.3-20.8-20.8s9.3-20.8,20.8-20.8 C228.9,32.5,238.2,41.8,238.2,53.3z",
    //         duration: 0.2,
    //         ease: "elastic.out(1, .8)",
    //       },
    //     ],
    //   },
    //   "<"
    // )
  }, [])

  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div
          css={css`
            position: relative;
          `}
        >
          <button
            ref={buttonRef}
            css={css`
              position: absolute;
              left: calc(50% - 50px);
              top: 60px;

              width: 100px;
              height: 100px;
              border: none;
              border-radius: 4px;
              background: transparent;
              ${currentInput === "mouse" ? buttonNoFocus : buttonFocus}
            `}
            onFocus={() => console.log("focus")}
            onBlur={() => console.log("blur")}
            onClick={() => console.log("click")}
          />
          <div
            css={css`
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              color: #fff;
              width: 50%;
              height: 50%;
              /* border: 1px solid ${starColor}; */

              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              user-select: none;

            `}
          >
            <h1
              id="title"
              css={css`
                font-weight: 200;
                margin: 0;
                font-size: 56px;
                line-height: 1.25;
                margin-bottom: 16px;
              `}
            >
              The life of women and men in Europe
            </h1>
            <p
              id="intro"
              css={css`
                font-size: 20px;
                font-weight: 500;
                line-height: 1.6;
              `}
            >
              This quiz is a redesigned version of the introduction to the
              digital publication{" "}
              <a
                href="https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-1a.html?lang=en"
                rel="noopener noreferrer"
                target="_blank"
                css={css`
                  color: ${starColor};
                  ${currentInput === "mouse" ? buttonNoFocus : buttonFocus}
                `}
              >
                The life of women and men in Europe – a statistical portrait
              </a>
              . Each of the following questions is related to one of the 12
              parts of the publication.
            </p>
          </div>
          <svg
            x="0px"
            y="0px"
            width={`${svgDims}px`}
            height={`${svgDims}px`}
            viewBox="0 0 434.9 434.9"
          >
            <path
              id="background"
              fill="#577590"
              d="M423.8,434.6H11.1c-6,0-10.8-4.8-10.8-10.8V11.1c0-6,4.8-10.8,10.8-10.8h412.7
    c6,0,10.8,4.8,10.8,10.8v412.7C434.6,429.8,429.8,434.6,423.8,434.6z"
            />
            <g id="stars">
              <path
                id="indicator"
                fill={chroma(starColor).alpha(0.25).hex()}
                stroke-width={2}
                stroke={starColor}
                strokeLinecap="round"
                d="M238.2,53.3c0,11.5-9.3,20.8-20.8,20.8c-11.5,0-20.8-9.3-20.8-20.8s9.3-20.8,20.8-20.8
                C228.9,32.5,238.2,41.8,238.2,53.3z"
                onClick={() => console.log("clicked")}
              />
              <path
                id="star-12"
                className="star"
                fill="#F9C750"
                d="M229.5,49.6l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C229.9,49.7,229.7,49.6,229.5,49.6z"
              />
              <path
                id="star-11"
                className="star"
                fill="#F9C750"
                d="M147.6,73.5l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C147.9,73.6,147.7,73.5,147.6,73.5z"
              />
              <path
                id="star-10"
                className="star"
                fill="#F9C750"
                d="M89,132l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C89.3,132.1,89.2,132.1,89,132z"
              />
              <path
                id="star-9"
                className="star"
                fill="#F9C750"
                d="M65.4,214l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C65.7,214.1,65.6,214,65.4,214z"
              />
              <path
                id="star-8"
                className="star"
                fill="#F9C750"
                d="M89,296l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3l-7.9,1.1
      c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8l7.2,3.8
      c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C89.3,296.1,89.2,296,89,296z"
              />
              <path
                id="star-7"
                className="star"
                fill="#F9C750"
                d="M147.6,354.5l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C147.9,354.6,147.7,354.5,147.6,354.5z
      "
              />
              <path
                id="star-6"
                className="star"
                fill="#F9C750"
                d="M229.5,378.1l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C229.9,378.2,229.7,378.1,229.5,378.1z
      "
              />
              <path
                id="star-5"
                className="star"
                fill="#F9C750"
                d="M311.5,354.2l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C311.8,354.3,311.7,354.2,311.5,354.2z
      "
              />
              <path
                id="star-4"
                className="star"
                fill="#F9C750"
                d="M370.1,295.5l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C370.4,295.6,370.2,295.5,370.1,295.5z
      "
              />
              <path
                id="star-3"
                className="star"
                fill="#F9C750"
                d="M393.6,214l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C394,214.1,393.8,214,393.6,214z"
              />
              <path
                id="star-2"
                className="star"
                fill="#F9C750"
                d="M370.1,132l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C370.4,132.1,370.2,132.1,370.1,132z"
              />
              <path
                id="star-1"
                className="star"
                fill="#F9C750"
                d="M311.5,73.5l-7.9-1.1L300,65c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3
      l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8
      l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C311.8,73.6,311.7,73.5,311.5,73.5z"
              />
            </g>
            <path
              id="path-1"
              fill="none"
              // stroke="#333"
              d="M217.63,52.711 C217.63,52.711 274.928,53.83 299.334,76.656"
            />
            <path
              id="path-2"
              fill="none"
              // stroke="#333"
              d="M298.876,76.827 C298.876,76.827 345.593,101.289 357.584,135.211"
            />
          </svg>
        </div>
      </header>
    </div>
  )
}

export default App
