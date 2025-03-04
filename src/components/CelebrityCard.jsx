// CelebrityCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CelebrityCard = ({ cardData }) => {
  return (
    <div className="flex flex-wrap justify-center p-7 mt-2 bg-gradient-to-r from-blue-200 to-pink-200">
      {cardData.map((card) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={card.id}>
          <Link to={`/celebrityDetail/${card.id}`}>
            <div className="max-w-sm mx-auto border-2 border-yellow-400 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 transform hover:scale-105">
              <img src={card.image} alt={card.name} className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-yellow-300" />
              <h1 className="text-xl font-bold text-center text-pink-600 mt-2">{card.name}</h1>
              <h2 className="text-lg font-semibold text-center text-pink-400 mt-1">Age: {card.age}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CelebrityCard;
