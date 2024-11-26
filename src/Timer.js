import React, {useContext, useEffect, useState} from "react";
import {CardNumContext} from "./CardNumContext";

function Timer() {
    const { cardNum  } = useContext(CardNumContext);
    const [timePassed, setTimePassed] = useState(0);
    const second =1000
        useEffect(() => {
        const start = Date.now();
        const interval = setInterval(() => {
            const delta = Date.now() - start; // milliseconds elapsed since start
            //console.log(Math.floor(delta / second));
            setTimePassed(Math.floor(delta / second)) // in seconds
        },second)
            return () => clearInterval(interval);
        },[]);


    return (
        <div>
            {cardNum>0 &&
            <div>  Timer: {timePassed} seconds </div>
                }
        </div>
    )
}

export default Timer;

