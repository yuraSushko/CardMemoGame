import React, {useContext, useEffect, useState} from "react";
import {CardNumContext} from "./CardNumContext";

function Timer() {
    const { cardNum } = useContext(CardNumContext);
    const [timePassed, setTimePassed] = useState(0);
    const [ setIntervalTimer] = useState(0);
    const second = 1000
        useEffect(() => {
            const interval = setInterval(() => {
                   setIntervalTimer(interval)
                   setTimePassed(timePassed =>timePassed+1)
            },second)
            return () => clearInterval(interval);
        },[cardNum]);


    return (
        <div>
            {cardNum>0 &&
            <div>  Timer: {timePassed} seconds </div>
                }
        </div>
    )
}

export default Timer;

