import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import Icons

const CelebrityCard = ({ cardData }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="flex flex-wrap justify-center  p-7 mt-2 bg-gradient-to-r from-blue-200 to-pink-200">
      {cardData.map((card) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={card.id}>
          <Link to={`/celebrityDetail/${card.id}`}>
            <div className="max-w-sm mx-auto border-2  bg-white rounded-lg shadow-lg 
              hover:shadow-2xl transition-shadow duration-300 p-4 transform hover:scale-105 
              hover:border-yellow-500 hover:ring-4 hover:ring-yellow-300">
              
              {/* Image Section */}
              <img
                src={card.image}
                alt={card.name}
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 hover:border-yellow-400 transition-transform 
                  duration-300 transform hover:scale-110"
              />

              {/* Name & Age */}
              <h1 className="text-xl font-bold text-center text-pink-600 mt-2">{card.name}</h1>
              {/* <h2 className="text-lg font-semibold text-center text-pink-400 mt-1">Age: {card.age}</h2> */}

              {/* Biography Section */}
              <p className="text-pink-700 text-center mt-2">
                {expandedCard === card.id
                  ? card.biography
                  : `${card.biography.substring(0, 100)}...`}
              </p>

              {/* Read More / Less Button with Icon */}
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevents navigation
                  toggleReadMore(card.id);
                }}
                className="flex items-center justify-center mx-auto text-pink-600 hover:text-pink-800 
                  underline mt-2 transition-all duration-300"
              >
                {expandedCard === card.id ? (
                  <>
                    Read Less <FaChevronUp className="ml-2" />
                  </>
                ) : (
                  <>
                    Read More <FaChevronDown className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CelebrityCard;
