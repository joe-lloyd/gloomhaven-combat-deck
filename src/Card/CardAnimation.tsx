export {};

// import React, { useEffect } from "react";
// import { useSpring, useChain, animated, SpringRef, SpringValues, useSprings } from "react-spring";
//
// interface CardAnimationProps {
//   animateTrigger: boolean;
//   children: React.ReactNode;
//   onAnimationEnd?: () => void;
// }
//
// type SpringStyle = { transform: string; boxShadow?: string }
//
// // const CardAnimation: React.FC<CardAnimationProps> = ({ animateTrigger, children }) => {
// //   // Create your springs
// //   const [scaleSpring, scaleRef] = useSpring<SpringStyle>(() => ({
// //     from: { transform: 'scale(1)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)" },
// //     to: { transform: animateTrigger ? 'scale(1.05)' : 'scale(1)', boxShadow: animateTrigger ? "0px 20px 30px 2px rgba(0, 0, 0, 0.2)" : "0px 0px 0px 0px rgba(0, 0, 0, 0.2)" },
// //   }))
// //
// //   const [flipSpring, flipRef] = useSpring<SpringStyle>(() => ({
// //     from: { transform: 'rotateY(0deg)' },
// //     to: { transform: animateTrigger ? 'rotateY(180deg)' : 'rotateY(0deg)' },
// //   }))
// //
// //   const [translateSpring, translateRef] = useSpring<SpringStyle>(() => ({
// //     from: { transform: 'translate3d(0, 0, 0)' },
// //     to: { transform: animateTrigger ? 'translate3d(100vw, -250px, 0)' : 'translate3d(0, 0, 0)' },
// //   }))
// //
// //   const [resetSpring, resetRef] = useSpring<SpringStyle>(() => ({
// //     from: { transform: 'scale(1.05)', boxShadow: "0px 20px 30px 2px rgba(0, 0, 0, 0.2)" },
// //     to: { transform: 'scale(1)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)" },
// //   }))
// //
// //   // Chain your springs
// //   // @ts-ignore
// //   useChain(animateTrigger ? [scaleRef, flipRef, translateRef, resetRef] : [], [0, 0.5, 1, 1.5])
// //
// //   return (
// //     <animated.div style={{...scaleSpring, ...flipSpring, ...translateSpring, ...resetSpring }}>
// //       {children}
// //     </animated.div>
// //   )
// // }
//
// const CardAnimation: React.FC<CardAnimationProps> = ({ animateTrigger, frontImage, backImage = "/Battle-Modifier-Card-Back.jpg", children }) => {
//   // const [scaleSpring, springApi] = useSpring(() => ({
//   //   from: { transform: 'scale(1)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)" },
//   // }), [animateTrigger])
//   //
//   // useEffect(() => {
//   //   if (animateTrigger) {
//   //     springApi.start({
//   //       from: { transform: 'scale(1)', boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)" },
//   //       to: [
//   //         { transform: 'scale(1.05)', boxShadow: "0px 20px 30px 2px rgba(0, 0, 0, 0.2)"},
//   //         { transform: 'scale(1.05) rotate(180deg)', boxShadow: "0px 20px 30px 2px rgba(0, 0, 0, 0.2)"},
//   //       ],
//   //       config: { duration: 200 },
//   //       reset: true,
//   //     })
//   //   }
//   // }, [animateTrigger])
//
//   const [flipped, setFlipped] = React.useState(false);
//
//   const { transform } = useSpring({
//     transform: `rotateY(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 },
//   });
//
//   return (
//     <div className="card" onClick={() => setFlipped(state => !state)}>
//       <animated.div className="card-inner" style={{ transform }}>
//         <div className="card-front">
//           <img src={frontImage} alt="front side" className="card-image" />
//         </div>
//
//         <div className="card-back">
//           <img src={backImage} alt="back side" className="card-image" />
//         </div>
//       </animated.div>
//     </div>
//
//   )
// }
//
//
// export default CardAnimation
