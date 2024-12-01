import React, {useContext, useEffect, useState} from "react";
import {CardNumContext} from "./CardNumContext";

function Timer() {
    const { cardNum } = useContext(CardNumContext);
    const [timePassed, setTimePassed] = useState(0);
    const [intervalTimer, setIntervalTimer] = useState(0);
    const second = 1000
        useEffect(() => {
            const interval = setInterval(() => {
                   setTimePassed(timePassed =>timePassed+1)
            },second)
            setIntervalTimer(interval)
            return () => clearInterval(interval);
        },[cardNum]);

        useEffect(() => { if (cardNum===0){clearInterval(intervalTimer)} },[cardNum]);



    return (
        <div>
            {cardNum>0 &&
            <div>  Timer: {timePassed} seconds </div>
                }
        </div>
    )
}

export default Timer;