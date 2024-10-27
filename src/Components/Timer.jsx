import React, {useEffect, useState} from 'react';
import { useTimer } from 'react-timer-hook';
import "./Components.css"

function Timer( props) {

    var time = new Date();
    var Target = time.setSeconds(time.getSeconds() + 600);
    var CurrentHour = time.getHours();
    var TargetHours = CurrentHour + 1;
    var Time = (TargetHours - CurrentHour) * 60 * 60;

    const [count, setCount] = useState(Time)
    var Hour = "00";
    var Min = Math.trunc(count/60);
    var Sec = Math.trunc(count) % 60;

    if (Sec < 10)
    {
        Sec = "0" + Sec
    }
    if (Min < 10)
    {
        Min = "0" + Min
    }

    useEffect(() => {

        setTimeout(() => {

            setCount(count - 1);
          }, 1000)
    
    }, [count])



    return (
        <>
        <div className='TimerMaster'>
            <div className='TimerBox'>
            <a>{Hour}</a>
            </div>
            <div className='TimerBox'>
            <a>{Min}</a>
            </div>
            <div className='TimerBox'>
            <a>{Sec}</a>
            </div>
        </div>
        </>
    )
}

export default Timer;