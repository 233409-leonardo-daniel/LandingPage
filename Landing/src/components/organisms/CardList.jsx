// CardList.js
import React from 'react';
import Card from '../molecules/Card';

const CardList = ({ type, cards }) => {
  const bgColor = type === 'razas' ? 'bg-gray-200' : 'bg-blue-100'; // Cambia los colores según sea necesario

  return (
    <div className={`grid ${type === 'razas' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-4`}>
      {cards.map((card, index) => (
        <Card 
          key={index} 
          image={card.image} 
          character={card.character} 
          text={card.text} 
          btn={card.btn} 
          bgColor={bgColor} 
        />
      ))}
    </div>
  );
};

export default CardList;
