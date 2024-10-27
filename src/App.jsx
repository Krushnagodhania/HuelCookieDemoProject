import { motion, useScroll } from 'framer-motion'
import { useState, Suspense, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import EmailAlert from './Components/EmailAlert'
import FAQ from './Components/FAQ'
import Footer from './Components/footer'
import Wheel from './Components/wheel.jsx'

import Cookie__ from '../public/Cookie__.jsx'


function App() {

  return (
    <>
    <div className="Top" style={{ width: "100%", height: "5vh"}}>
      <img src='src/assets/Huel_logo.png' className='Logo ' style={{width: "6%"}}></img>
      <img src='src/assets/uk.svg' className='Logo' style={{width: "3%", paddingLeft: "75%"}}></img>
      <img src='src/assets/basket.png' className='Logo' style={{width: "3%", paddingLeft: "1.8%"}}></img>
      <img src='src/assets/person.webp' className='Logo' style={{width: "2.3%", paddingLeft: "1.8%"}}></img>
      <img src='src/assets/magin.png' className='Logo' style={{width: "2.6%", paddingLeft: "1.8%"}}></img>
    </div>

      <motion.img
       src='src/assets/CookieHeader.png'
        style={{width: '0vw', paddingTop: "2vw", opacity: "0.9"}}
        animate={{ width: '70vw' }}
        transition={{ ease: "anticipate", duration: 1.5 }}
        ></motion.img>

    {/*<div className='Find_Centre'></div>*/}
    <motion.div
    style={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ ease: "anticipate", duration: 1.3, delay: 1 }}
    >
      <Canvas >
      <Suspense>
        <ambientLight intensity={3.5} ></ambientLight>
        
        <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxDistance={8}
        autoRotate={true}
        autoRotateSpeed={3}
        ></OrbitControls>
        <Cookie__></Cookie__>
      </Suspense>
      <Environment preset='night'></Environment>
      </Canvas>
    </motion.div>


    <motion.div
     className='Macro_Centre'
     style={{opacity: 0, y: 120}}
     animate={{ opacity: 1, y: 0 }}
    transition={{ ease: "anticipate", duration: 2, delay: 3 }}
     >
      <div className='StraightBlackLine'></div>
        <div className='Centre_Macro'>
        <a className='Our_Font First' style={{fontSize: '20px'}}>40G PROTIEN </a>
        <div style={{marginLeft: '2vw'}}></div>
        <a className='Our_Font First' style={{fontSize: '20px'}}>60 KCALS </a>
        <div style={{marginLeft: '2vw'}}></div>
        <a className='Our_Font First' style={{fontSize: '20px'}}>50G CARBS </a>
        <div style={{marginLeft: '2vw'}}></div>
        <a className='Our_Font First' style={{fontSize: '20px'}}>2G FAT </a>
        </div>
    </motion.div>

    <div className='GreySeperator' style={{marginTop: '2vh'}}></div>
    <div style={{marginTop: '2vh'}}>
      <img src='src/assets/Mens_Health_logo_red_x25.png' className='Logo_2' style={{width: "10%"}}></img>
      <img src='src/assets/Untitled-design-17.png' className='Logo_2' style={{width: "10%", paddingLeft: "6vw"}}></img>
      <img src='src/assets/The-Guardian-logo.png' className='Logo_2' style={{width: "10%", paddingLeft: "6vw"}}></img>
      <img src='src/assets/times.png' className='Logo_2' style={{width: "10%", paddingLeft: "6vw"}}></img>
    </div>
    <div className='GreySeperator' style={{marginTop: '2vh'}}></div>
    <div className='GreyBox' style={{marginTop: '2vh', height: '390px'}}>

    <motion.img
     src='src/assets/cookiePackaging.png'
      className='CookiePicture'
      initial={{ transform: `rotate(15deg)` }}
      whileInView={{ transform: `rotate(35deg)` }}
      transition={{repeat: 5, repeatType: 'reverse', ease: "", duration: 0.2 }}
      ></motion.img>

    <motion.img 
    src='src/assets/cookiePackaging.png' 
    className='CookiePicture2'
      initial={{ transform: `rotate(-15deg)` }}
      whileInView={{ transform: `rotate(-35deg)` }}
      transition={{repeat: 5, repeatType: 'reverse', ease: "", duration: 0.2 }}
    ></motion.img>

    <EmailAlert></EmailAlert>
    </div>
    <div className='GreyBox WheelFlex' style={{marginTop: '2vh', height: '400px', paddingTop: "1vh"}}>
    <Wheel></Wheel>
    </div>

    <div className='FAQ_MASTER'>
    <h1 className='Our_Font FAQ_SPACING' style={{fontSize: "40px", marginRight: "2vw"}}>FAQ</h1>
      <div className='FAQ_border2'></div>
      <FAQ 
      question="How do I contact the Huel Team for Support"
      Answer = "The best way to contact the Huel team is to either email the team at Support@Huel.co.uk or you can fill in the contact us form by scrolling down this page and click on the contact us button :)"
      ></FAQ>
      <FAQ 
      question="How to place a order with Huel"
      Answer="To place an order with Huel, visit [huel.com](http://huel.com) and browse their product selection. Choose your items, then select the desired flavor, quantity, and one-time purchase or subscription option. Once your items are in the cart, proceed to checkout, where you’ll need to provide shipping and payment information. After confirming your order details, submit the order, and you’ll receive a confirmation email."
      ></FAQ>
      <FAQ 
      question="How to get a free T-shirt"
      Answer="To get a free Huel T-shirt, place an order for a starter kit (usually your first order) on [huel.com](http://huel.com). When you order Huel powder or select items, new customers typically receive a free T-shirt and shaker as part of their first purchase. During checkout, the option for a T-shirt in your size should appear automatically. For any questions, contact Huel’s customer service to confirm the T-shirt offer before completing your order."
      ></FAQ>
      <FAQ 
      question="How do I get a refund"
      Answer="To process a refund with Huel, start by contacting their customer support via [huel.com](http://huel.com) within 30 days of purchase. Ensure the items are unopened and in original condition. The team will provide instructions for returning the product, usually including a return label or address. Once Huel receives and inspects the returned items, they’ll initiate the refund to your original payment method. Refund times may vary, so check with customer service if you need an update on the status."
      ></FAQ>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
