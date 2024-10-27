import React, {useState} from 'react';

function FAQ(props) {
  const [count, setCount] = useState('FAQ_Expander_null')
  
    return (
      <>
        <div className="FAQ">
          <a className='GeneralFontStyle'>{props.question}</a>
          <button className="FAQ_BUTTON">
          <img src="src/assets/dropdown.png" 
          style={{width: "1.5vw"}}
          onClick={() => {
            console.log(count)
            if (count === "FAQ_Expander")
            {
              setCount("FAQ_Expander_Reverse")
            }
            else
            {
              setCount("FAQ_Expander")
            }
          }}
          ></img>
          </button>
        </div>
        <div className={count}>
          <br></br>
          <div className='FAQ_explainer'>
            <a className='GeneralFontStyle FAQ_explainerFont'>
              {props.Answer}
            </a>
            </div>
        </div>
      </>
      )
}

export default FAQ;