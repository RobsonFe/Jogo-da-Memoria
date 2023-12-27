import { useState } from "react";
import Board from "./Board";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const generateCards = () => {
    const values = ["A", "B", "C", "D","E","F","G","H"];
    const cards = values.map((value) => ({
        value,
        isFlipped: false,
    }));
    const duplicatedCards = cards.concat([...cards]).map((card, index) => ({ ...card, id: index }));
    return shuffleArray(duplicatedCards);
};

function Game() {
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [chances, setChances] = useState(6);

    const result = cards.filter((card) => card.isFlipped).length;

    const handleCardClick = (clickedCard) => {
        
        if(chances === 0) return;

        if(flippedCards.length === 2) return;

        const newCards = cards.map((card)=>{
          return card.id === clickedCard.id ? {...card, isFlipped: true} : card;
        }); 

        setCards(newCards);

        setFlippedCards([...flippedCards, clickedCard]);

        if(flippedCards.length === 1){
            setTimeout(()=>{
              
            const [firstCard] = flippedCards;

            if(firstCard.value !== clickedCard.value){
                const resetarCards = cards.map((card)=>{
                return card.id === firstCard.id || card.id === clickedCard.id
                  ? {...card, isFlipped: false}
                  : card;  
                });
                setCards(resetarCards);
                setChances((prev) => prev - 1);
            }  
            setFlippedCards([]);

            },600)
        }
    }

    const resetGame = () => {
        setCards(generateCards());
        setFlippedCards([]);
        setChances(7);
    };

    return (
        <div className="game container">
            <Board cards={cards} onCardClick={handleCardClick} />
            {chances === 0 ? (
                <p className="fw-bold text-danger">Suas tentativas acabaram!</p>
            ) : result === cards.length ? (
                <h2 className="h2 text-success">Parabéns, você venceu!</h2>
            ) : (
                <p className="fw-bold">Você possui {chances} tentativas</p>
            )}

            <button className="btn" onClick={resetGame}>
                Reiniciar Jogo
            </button>
        </div>
    );
}

export default Game;
