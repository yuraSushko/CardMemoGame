import React, {useContext, useEffect, useState} from "react";
import {CardNumContext} from "./CardNumContext";

function Timer() {
    const { cardNum } = useContext(CardNumContext);
    const [timePassed, setTimePassed] = useState(0);

    const second = 1000
    useEffect(() => {
        let interval = null;

        if (cardNum > 0) {
            interval = setInterval(() => {
                setTimePassed((prevTime) => prevTime + 1);
            }, second);
        } else {
            setTimePassed(0); // Reset timer when game is over
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [cardNum]);


    return (
        <div>
            {cardNum>0 &&
            <div>  Timer: {timePassed} seconds </div>
                }
        </div>
    )
}

export default Timer;