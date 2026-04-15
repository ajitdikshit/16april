
import {useState} from 'react';
import BounceCards from './component/BounceCards';
import ClickSpark from './component/ClickSpark';
import CountUp from '/src/component/CountUp'
import './App.css';
import GhostCursor from '/src/component/GhostCursor';
import TextType from '/src/component/TextType';
import Ribbons from '/src/component/Ribbons';
import TextCursor from '/src/component/TextCursor';
export default function App() {

 const images = [
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img1.jpg?raw=true",
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img2.jpeg?raw=true",
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img3.jpeg?raw=true",
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img4.jpeg?raw=true",
  "https://github.com/ajitdikshit/16april/blob/main/src/assets/img5.jpeg?raw=true"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-75px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(75px)",
  "rotate(-5deg) translate(150px)"
]; 


  return (
    <div className='main'>
      <CountUp
  from={0}
  to={366}
  separator=","
  direction="up"
  duration={10}
  className="count-up-text"
  delay={5}
/>
 <ClickSpark
    className="click"
  sparkColor='#f900a2'
  sparkSize={25}
  sparkRadius={25}
  sparkCount={8}
  duration={400}
>
  <div className="heading">
<TextType 
  text={["Happy 12 Months Chutku", "12 Months...", "Oh Wait....","Its been a year???","Already?????","Happy one year anniversary my love<3","I LOVE YOU SOOO MUCHHH!","MWAHHHHHHHHHHHH"]}
  typingSpeed={50}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={[""]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
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


<div className='note' style={{ height: 600, position: 'relative'}}>
 <p className='letter'>I love you so much chutku. Mera pyara sa baby. I looooooooooivveee youuuu sooooo muchhhhh innnnnaaaa saaraaaa . Jitna bhi bolun kam hi hai.<br/>

Honestly, neither u nor me on 16 April,2025 thought we will be going so far in life together. Mai to himmat karra tha aaj ki raat ki kaise batau kaise batau.  I never felt so nervous in my life.
It was like i wanted you for myself. But still i had to risk our friendship for that. But atill mujhse raha nahi gaya tumhare das baar kehne par bhi mene bol hi dia ki I love you. Tumne mujhe bohot pareshan kia shuruat me i love you na bolke haan. Ab aaj tumko bohot sara ilobu bolna padega sab kuch barabar krne k liye hihihihi.<br/>

I promise mai hamesha tumko aise hi pyaar se rakhunga bohot khush rkhunga. Tumhare liye sab kuch krunga. This one year has made me realise that there is no one actually rooting for you in hr life than ur parents, family and ur partner. I'm very thankful to you for standing with me in the lows of my life.<br/>

I will do my best to keep you happy and safe ur wholeeee life. Ur my baby pyara pyara mwah. I love you so much chutku. Zyada ni likh paunga haan exam bhi hai. Exams k baad jitna nhi likha uske badle me khub sara pyaar krlunga oki. Solly<br/>

I looooooooooivveee youuuu sooooo muchhhhh innnnnaaaa saaraaaa........<br/>
Be mine forever like im yours....<br/>
Agar roz pyaar se nini krni h to mere paas to aana hi pdega na bhaag k chutku ko mwah....</p>
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
    bloomRadius={2}
    bloomThreshold={0.025}

    // Fade-out behavior
    fadeDelayMs={1000}
    fadeDurationMs={1500}
  />
</div>
<div style={{ height: '100vh', position: 'relative', overflow: 'hidden'}}>
  <div className="text">
    U ARE MINE FOREVER &lt;3 <br/>NEVER LETTING YOU GO<br/>MANY MORE YEARS TO GO MWAH
  </div>
  <Ribbons
    baseThickness={15}
    colors={["#0078f8","#0051ff","#0019a5"]}
    speedMultiplier={0.54}
    maxAge={400}
    enableFade
    enableShaderEffect
  />
</div>
<div className="text-cursor">
  <div className="movie">WE WILL WATCH HUNDREDS OF MOVIES TOGETHER BTW...</div>
  <TextCursor
  text="Mwah"
  spacing={80}
  followMouseDirection
  randomFloat
  exitDuration={0.3}
  removalInterval={20}
  maxPoints={10}
/>
</div>

    </div>
   

  )
}