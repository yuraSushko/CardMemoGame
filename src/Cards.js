import {useContext, useEffect, useState} from "react";
import {CardNumContext} from "./CardNumContext";

function Cards() {
    const hidden = '0';
    const shown = '1';
    const set = '2';
    const { cardNum, setCardNum  } = useContext(CardNumContext);
   // const [cardsForEachGame, setCardsForEachGame] = useState([]);
    const [cards, setCards] = useState([]);
    const hiddenPicture="data:image/png;base64,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"
    // need 15 pics
    const pictures=[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlalyxwBOSddbHXzSZTwNQ9HK0nOsmwk7RbQ&s",
        "https://www.edupics.com/img/downloads/number---1-20182-large.jpg",
        "https://www.edupics.com/img/thumbnails/0/image-number---2-b-20181.jpg",
        "https://www.edupics.com/img/thumbnails/0/image-number---3-20177.jpg",
        "https://www.edupics.com/img/thumbnails/0/image-number---4-20175.jpg",
        "https://www.edupics.com/img/thumbnails/0/image-number---5-20176.jpg",
        "https://www.edupics.com/image-number-6-s20183.jpg",
        "https://www.edupics.com/image-number-7-s20179.jpg",
        "https://www.edupics.com/image-number-8-s20180.jpg",
        "https://www.edupics.com/img/thumbnails/0/image-number---9-20178.jpg",
        "https://img.freepik.com/premium-vector/cute-number-ten-character-kids-leaning-numbers-preschool-doodle-number-10-cartoon-style_107547-1850.jpg",
        "https://img.freepik.com/premium-photo/blue-jelly-digit-11-eleven-isolated-white-background-jelly-colorful-alphabets-numbers-kids-3d_394271-3965.jpg?semt=ais_hybrid",
        "https://img.freepik.com/premium-photo/number-12-birthday-celebration-foil-helium-balloon-with-presents-3d-render_601748-34373.jpg?semt=ais_hybrid",
        "https://img.freepik.com/premium-vector/13-number-sweet-glazed-doughnut-vector-illustration_787461-2355.jpg?semt=ais_hybrid",
        "https://img.freepik.com/premium-photo/14-number-shape-with-snake-skin-motif-design-python-skin_826196-1950.jpg?semt=ais_hybrid",
        "https://img.freepik.com/premium-photo/number-birthday-ballloon-with-emoji-faces-balloons-d-render_601748-31430.jpg?semt=ais_hybrid"
    ]


    const checkIfWonAndRest = () => {
        let done = cards.length>0 && cards.every( (card)=> card.status===set)
        if(done){
            alert("congrats you won 🎉")
            setTimeout( () => {
                setCardNum(0)
            },5000)
        }
    }


    useEffect(()=> {
            //console.log("initArray")
            const tempCardArray = []
            for (let id = 0; id < cardNum; id++) {
                tempCardArray.push({
                    id: id,
                    status: hidden,
                    picture: hiddenPicture
                })
            }
            tempCardArray.sort(() => Math.random() - 0.5);
            setCards([...tempCardArray])//prevState => [...prevState, newItem])


        },[cardNum])

    const createClickableImage = (onClick,imgUrl,altText) => {
        //console.log('createClickableImage')
        return (
            <button  onClick={onClick}  style={{ width: "50px", height: "50px" ,margin:"5"}}>
                <img src={imgUrl} alt={altText} style={{ width: "50px", height: "50px",margin:"5" }}/>
            </button>
        )
    }

    const flipCardsAndCheckMatch= (id) => {
        //console.log('flipCardsAndCheckMatch')
        let newCards = [...cards]
        console.log('newCards')
        console.log(newCards)
        const clickedNow = newCards.find(card => card.id === id)
        console.log('clickedNow find right id')
        console.log(clickedNow)
        if (clickedNow.status === hidden) {
            clickedNow.status = shown
            clickedNow.picture = pictures[id < (cards.length / 2) ? id : cardNum - 1 - id]

            console.log('clickedNow after show')
            console.log(clickedNow)
            const openCards = newCards.filter(nCard => nCard.status === shown)
            console.log('open all shown')
            console.log(openCards)
            console.log("length is " + openCards.length)
            setCards([...newCards])

            if (openCards.length === 2) {
                setTimeout(() => {
                if (openCards[0].picture === openCards[1].picture) {
                    openCards.forEach((card) => (card.status = set));
                } else {
                    openCards.forEach((card) => {
                        card.status = hidden;
                        card.picture = hiddenPicture;
                    })
                }
                setCards([...newCards])
                checkIfWonAndRest()
            },1000)
            }
        }

    }
// /style={{display: "flex", flexWrap: "wrap"}}
    return (
        <div >
            {/*Hi From Cards*/}
            {/*card Num {cardNum}*/}
            <br/><br/>
            {(cards.length > 0) &&
                cards.map((card) => (
                    createClickableImage(() => flipCardsAndCheckMatch(card.id), card.picture, card.id)
                ))
            }


        </div>
    )

}

export default Cards;