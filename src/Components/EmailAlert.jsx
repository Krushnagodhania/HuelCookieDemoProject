import React, {useState, useRef} from 'react';
import Timer from './Timer';

function EmailAlert() {

  const [count, setCount] = useState(false)
  const Ref = useRef(null)

  if (count === false)
  {
    return (
      <>
        <div className='EmailAlert_flex'>
          <Timer></Timer>
          <br></br>
          <a className='GeneralFontStyle' style={{fontSize: "18px", fontWeight: "bold"}}>Till these wonderful delites are released, We only have 500 packets in stock</a>
          <br></br>
          <a className='GeneralFontStyle' style={{fontSize: "18px"}}>Please enter your email to be notified as soon as they are up for sale</a>
          <input ref={Ref} className='Email' placeholder='EMAIL' style={{width: "40vw", height: "4vh"}}></input>
          <button 
          className='SubmitButton'
          onClick={() => {
            if (Ref.current.value !== null)
            {
              setCount(true);
            }
          }}
          >
            <a>ENTER</a>
          </button>
        </div>
      </>
      )
  }
  else
  {
    return ( 
      <>
      <div className='EmailEnteredFlex'>
      <h1 className='GeneralFontStyle' >THANK YOU</h1>
      <a className='GeneralFontStyle' style={{fontSize: "20px"}}>we will send a email as soon as the cookies are up for sale</a>
      <br></br>
      <a className='GeneralFontStyle' style={{fontSize: "20px"}}>so please keep a eye on your inbox :)</a>
      </div>  
      </>
    )
  }

}

export default EmailAlert;