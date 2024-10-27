import React, { useState, useRef, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { useAnimation, motion, delay } from "framer-motion";

const prizes = [
    'free cookie', // never
    'free cookie',
    ':(',
    'free cookie',
    ':(',
    'free cookie',
    ':(',
    ':(',
  ];
  const colors = [
    '#ffffff', //0
    '#ff595e', // 1
    '#5bc0eb', // Blue
    '#fface4', // Yellow
    '#8ac926', // Purple
    '#ff595e', // Turquoise
    '#ffca3a', // Pink
    '#d883ff', // Orange
  ];
  const TextRotation = [
    "rotate(45deg)", // Red
    "rotate(20deg)", // Green
    "rotate(30deg)", // Blue
    "rotate(25deg)", // Yellow
    "rotate(30deg)", // Purple
    "rotate(25deg)", // Turquoise
    "rotate(25deg)", // Pink
    "rotate(45deg)", // Orange
  ];
  const SpacingText = [
    "80px", // Red
    "80px", // Green
    "80px", // Blue
    "80px", // Yellow
    "90px", // Purple
    "85px", // Turquoise
    "80px", // Pink
  ];
  const AdditionalPadding = [
    "0vw", // Red
    "0vw", // Green
    "0vw", // Blue
    "22.5px", // Yellow
    "0vw", // Purple
    "22.5px", // Turquoise
    "0vw", // Pink
    "45px", // Orange
  ];

  var NumberOfTries = 3;
  var Won = true

function wheel()
{

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1, // 1 means 100% of the element is in view
    triggerOnce: true, // Trigger only once when in view
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5  } },
  };

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({
    threshold: 1, // 1 means 100% of the element is in view
    triggerOnce: true, // Trigger only once when in view
  });
  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  const variants2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const [selectedPrize, setSelectedPrize] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [EmailEntered, setEmailEntered] = useState(false);
  const [RenderedAgain, setRenderedAgain] = useState(false);
  const RefValue = useRef(null);
  const RefButton = useRef(null)


  if (RenderedAgain)
  {
    console.log('we trying');
    return (
      <>
        <div style={{marginLeft: "18vw", marginTop: "5vw"}}>
        <h1 className='GeneralFontStyle'>FORTUNE WAS NOT IN YOUR FAVOUR</h1>
        <t className='GeneralFontStyle' style={{fontSize: '18px'}}>but you can still get your hands on these delicious cookies</t>
        <br></br>
        <br></br>
        <t className='GeneralFontStyle' style={{fontSize: '18px'}}>Just Enter your email above</t>
        <br></br>
        <br></br>
        <t className='GeneralFontStyle' style={{fontSize: '18px'}}>And you will get notifed when these little healthy nuggets of joy will be available</t>
        </div>
      </>
      )
  }

  if (EmailEntered)
  {
    return (
      <>
      <div className='WinningPanel'>
        <h1 className='GeneralFontStyle' style={{fontSize: '60px'}}>CONGRATULATIONS</h1>
        <a className='GeneralFontStyle ' style={{fontSize: "20px"}}>You have won a free Huel Protien cookie</a>
        <br></br>
        <a className='GeneralFontStyle' style={{fontSize: "20px"}}>Please keep an eye on your inbox we will email you</a>
        <br></br>
        <a className='GeneralFontStyle' style={{fontSize: "20px"}}>with any further delivery details we require :)</a>
      </div>
      </>
    )
  }

  const RenderSwitch = () => {
    switch (selectedPrize)
    {
      case null : 
      return (
        <>
        <div style={{marginLeft: "0vw", marginTop: "5vw", marginRight: "0.5vw"}}>
          <h1 className='Our_Font'>WIN A FREE COOKIE</h1>
          <t className='Our_Font'>Spin our wheel of fortune to win </t>
          <br></br>
          <t className='Our_Font'>a free cookie</t>
          <br></br>
          <t className='Our_Font'>Click the button below</t>
          <br></br>
          <t className='Our_Font'>you have 3 tries to win</t>
          <br></br>
          <motion.button 
          onClick={spinWheel}
          disabled={isSpinning}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          >
            SPIN THE WHEEL !
          </motion.button>
        </div>
        </>
      )
      case "free cookie" : 
      return (
        <>
        <div className='Spin_Win'>
        <h1 className='GeneralFontStyle'>CONGRATULATIONS</h1>
        <t className='GeneralFontStyle'>You have won a free Huel cookie</t>
        <br></br>
        <t className='GeneralFontStyle'>please enter your email below</t>
        <br></br>
        <t className='GeneralFontStyle'>so we can contact you about your</t>
        <br></br>
        <t className='GeneralFontStyle'>FREE cookie</t>
        <br></br>
        <input
        ref={RefValue}
        style={{ width: "15vw", height: "29px", fontSize: "15px"}}
        ></input>
        <button 
        className='Go_button'
        onClick={()=> {
          if (RefValue.current.value.length > 0)
          {
            setEmailEntered(true);
          }
          
        }}
        >
          <a>GO</a>
        </button>
      </div>
        </>
      )
      case ":(" : 
      return (
        <>
              <div className='Spin_Win'>
        <h1 className='GeneralFontStyle'>UNLUCKY TRY AGAIN</h1>
        <t className='Our_Font'>You have not won the infamous</t>
        <br></br>
        <t className='GeneralFontStyle'>huel cookie</t>
        <br></br>
        <t className='GeneralFontStyle'>please try again</t>
        <br></br>
        <t className='GeneralFontStyle'>:(</t>
        <div className='TriesBox'>
          <t className='GeneralFontStyle NumberOfTriesFont'> {NumberOfTries} ATTEMPTS LEFT</t>
        </div>
        </div>
        </>
      )
    }
  }

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    
    const totalSectors = prizes.length;
    const randomIndex = Math.floor(Math.random() * (totalSectors - 1 ) + 1);
    const sectorAngle = 360 / totalSectors;
    const Answer = (randomIndex) * sectorAngle;
    var Adjustment = 93

    if (randomIndex == 1)
    {
      Adjustment = 0;
    }
    if (randomIndex == 7)
    {
      Adjustment = 20
    }


    const randomSpin = 360 * 10 + Answer - Adjustment;
    setRotation(randomSpin);

    setTimeout(() => {
      NumberOfTries = NumberOfTries - 1;
      setIsSpinning(false);
      setSelectedPrize(prizes[randomIndex]);
    }, 3100);
  };

    if (selectedPrize == "free cookie")
    {
      Won = false
      console.log('falsed')
    }

    if (NumberOfTries <= 0)
    {
      if (selectedPrize == ':(')
      {
        setTimeout(() => {
          console.log('timeout over');
          setRenderedAgain(true);
        }, 700);
      }
    }
    

  return (
    <>
    <div className='WheelFlex'>
      <div className='Wheel_Where'>
      <h1 className='Our_Font'>WIN A FREE COOKIE</h1>
      <t className='Our_Font'>Spin our wheel of fortune to win </t>
      <br></br>
      <t className='Our_Font'>a free cookie</t>
      <br></br>
      <t className='Our_Font'>Click the button below</t>
      <br></br>
      <t className='Our_Font'>you have 3 tries to win</t>
      <br></br>
      {Won?
      <motion.button 
      onClick={spinWheel}
      disabled={isSpinning}
      ref={ref2}
      animate={controls2}
      initial="hidden"
      variants={variants2}>
        SPIN THE WHEEL !
      </motion.button>
      :
      <button onClick={spinWheel} disabled={true}>
        SPIN THE WHEEL !
      </button>
      }
    </div>
    
    <div className="wheel-container" style={{marginTop: "1vw"}}>
      <div 
        className={`wheel ${isSpinning ? 'spinning' : ''}`} 
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {prizes.map((prize, index) => (
          <div 
            key={index} 
            className="segment"
            style={{ 
              transform: `rotate(${index * (360 / prizes.length)}deg)`, 
              backgroundColor: colors[index]
            }}
          >
            <span
             className="prize-text"
             style={{
                transform: TextRotation[index],
                paddingBottom: SpacingText[index], 
                paddingRight: AdditionalPadding[index], 
             }}
             >{prize}</span>
          </div>
        ))}

      </div>
    </div>
    <img src='src/assets/FortuneArrow.png' className='FortuneArrow'></img>
    <div>
      {
        RenderSwitch()
      }
    </div>
    </div>
    </>
  );
}

export default wheel


