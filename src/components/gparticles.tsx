import * as React from "react";
import Particles from 'react-tsparticles';

export default class GParticles extends React.Component {
  render(): React.ReactNode {
    return <>
      <Particles
        options={{
          background: {
            color: {
              value: "#0D0D0D"
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true
            },
            modes:{
              repulse: {
                distance: 1000
              }
            }
          },
          particles: {
            color: {
              value: "#CC0000",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "right",
              enable: true,
              outMode: "out",
              random: true,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "polygon",
              polygon: {
                sides: 4
              }
            },
            size: {
              random: true,
              value: 5,
            },
            shadow: {
              enable: true,
              color: "#CC0000"
            }
          },

          fullScreen: {
            enable: true,
            zIndex: -1
          }
        }} />
      </>;
  }
}