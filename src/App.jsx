
import {useState} from 'react';
import BounceCards from './component/BounceCards';
import ClickSpark from './component/ClickSpark';
import CountUp from '/src/component/CountUp'
import './App.css';
export default function App() {

 const images = [
  "/src/assets/img1.jpg",
  "/src/assets/img2.jpeg",
  "/src/assets/img3.jpeg",
  "/src/assets/img4.jpeg",
  "/src/assets/img5.jpeg"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
]; 


  return (
    <div>
 <ClickSpark
    className="click"
  sparkColor='#f900a2'
  sparkSize={25}
  sparkRadius={25}
  sparkCount={8}
  duration={400}
>
  
    <h1>Hello Chutkuuuuuuuuu....</h1><h1>Mwahhhhhhhhhhhh</h1>
    <BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={500}
  containerHeight={250}
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

    </div>
   

  )
}