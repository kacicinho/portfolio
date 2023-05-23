import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
  const cardListRef = useRef(null);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const calculateCardsPerPage = () => {
      const cardListWidth = cardListRef.current.clientWidth;
      const cardWidth = 250; // Adjust this value based on your card width
      const newCardsPerPage = Math.floor(cardListWidth / cardWidth);
      setCardsPerPage(newCardsPerPage);
    };

    calculateCardsPerPage();
    window.addEventListener('resize', calculateCardsPerPage);
    return () => {
      window.removeEventListener('resize', calculateCardsPerPage);
    };
  }, []);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(cards.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedCards = cards.slice(startIndex, endIndex);

  return (
    <div className="card-list" ref={cardListRef}>
      <button className="arrow left" onClick={handlePrevious}>
        &lt;
      </button>
      <div className="cards-container">
        {displayedCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            number={startIndex + index + 1}
          />
        ))}
      </div>
      <button className="arrow right" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default CardList;
