import React, {useContext, useEffect} from 'react';
import {useState} from 'react';
import {CardNumContext} from "./CardNumContext";

function Login() {
    const [name,setName] = useState("");
    const { cardNum, setCardNum } = useContext(CardNumContext);
    const [cardNumBeforeValid, setCardNumBeforeValid ] = useState(0);
    const [startGame, setStartGame] = useState(false);
    const setCardNumberIfValid=(num)=>{
        if (name!=="") {
            if ((num > 0 && num <= 30 && num % 2 === 0)) {
                setCardNumBeforeValid(num)
                alert("to Start game with " + name + " totaling " + num + " cards pres start game");
            } else {
                //setCardNumBeforeValid(0)
                alert("number of cards should be even (max of 30)")
            }
        }else{alert("input your name first ;)")}
    }

    useEffect(() => {
        if(startGame){
            if(cardNumBeforeValid > 0){setCardNum(cardNumBeforeValid)}
            setStartGame(false);
        }
    }, [startGame]);

     const iWasClicked=()=>{
         setStartGame(true)
     }


    return(
        <div>
            {cardNum === 0 &&
                <div>
                    <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                    <input id="inputCardNum" value={cardNumBeforeValid} type="number"
                    onChange={(e) => setCardNumberIfValid(Number(e.target.value))}/>
                    <button id="buttonStart" onClick={iWasClicked}>Start Game</button>
                </div>

                }
       </div>
                )


}

export default Login;