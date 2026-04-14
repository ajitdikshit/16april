
import {useState} from 'react';
import BounceCards from './component/BounceCards';
import ClickSpark from './component/ClickSpark';
import CountUp from '/src/component/CountUp'
import './App.css';
import GhostCursor from '/src/component/GhostCursor'
export default function App() {

 const images = [
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img1.jpg?raw=true",
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img2.jpeg?raw=true",
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img3.jpeg?raw=true",
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img4.jpeg?raw=true",
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img5.jpeg?raw=true"
];

const transformStyles = [
  "rotate(5deg) translate(-100px)",
  "rotate(0deg) translate(-55px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(55px)",
  "rotate(-5deg) translate(100px)"
]; 


  return (
    <div className='main'>
 <ClickSpark
    className="click"
  sparkColor='#f900a2'
  sparkSize={25}
  sparkRadius={25}
  sparkCount={8}
  duration={400}
>
  <div className="heading">
<h1>Hello Chutkuuuuuuuuu....</h1><h1>Mwahhhhhhhhhhhh</h1>
  </div>
    
    <BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={300}
  containerHeight={150}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={true}
/>
  
</ClickSpark>
<CountUp
  from={0}
  to={365}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
  delay={0}
/>

<div className='note' style={{ height: 600, position: 'relative'}}>
 <p className='letter'>my name is ajit</p>
  <GhostCursor
    // Visuals
    color="#ff009d"
    brightness={10}
    edgeIntensity={0}

    // Trail and motion
    trailLength={10}
    inertia={1}

    // Post-processing
    grSainIntensity={0.1}
    bloomStrength={0.5}
    bloomRadius={1}
    bloomThreshold={0.025}

    // Fade-out behavior
    fadeDelayMs={1000}
    fadeDurationMs={1500}
  />
</div>

    </div>
   

  )
}