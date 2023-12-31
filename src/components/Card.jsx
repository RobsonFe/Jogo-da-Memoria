/* eslint-disable no-unused-vars */


function Card({card, onClick}) {
  return (
    <div className={`card ${card.isFlipped ? "flipped" : ""}`}
    
    onClick={()=>onClick(card)}>

        { card.isFlipped ? card.value : "?"}
    </div>
  )
}

export default Card;