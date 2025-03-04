import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTrophy, FaFilm, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const CelebrityDetail = ({ cardData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const celebrity = cardData.find((celeb) => celeb.id === parseInt(id));

  if (!celebrity) {
    return <p className="text-center text-red-500 text-lg">Celebrity not found!</p>;
  }

  return (
    <div className="min-h-screen bg-pink-100 p-6 flex justify-center">
      {/* Celebrity Card */}
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-4 border border-pink-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-pink-600 hover:text-pink-900 transition"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        </div>
        
        {/* Profile Section */}
        <div className="flex items-center space-x-4 mt-4">
          <img
            src={celebrity.image}
            alt={celebrity.name}
            className="rounded-full w-16 h-16 border border-pink-300"
          />
          <div>
            <h1 className="text-lg font-bold text-pink-800">{celebrity.name}</h1>
            <p className="text-sm text-pink-500">Age: {celebrity.age}</p>
          </div>
        </div>
        
        {/* Biography */}
        <div className="mt-3">
          <p className="text-pink-700 text-sm">{celebrity.biography}</p>
        </div>
        
        {/* Movies & Awards */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* Featured Films */}
          <div>
            <h2 className="text-md font-bold text-pink-800 flex items-center">
              <FaFilm className="mr-2" /> Featured Films
            </h2>
            <ul className="mt-2 space-y-1">
              {celebrity.films.map((film, index) => (
                <li key={index} className="text-sm text-pink-700 bg-pink-200 p-2 rounded-md">
                  {film}
                </li>
              ))}
            </ul>
          </div>

          {/* Awards & Achievements */}
          <div>
            <h2 className="text-md font-bold text-pink-800 flex items-center">
              <FaTrophy className="mr-2 text-yellow-500" /> Awards
            </h2>
            <ul className="mt-2 space-y-1">
              {celebrity.awards.map((award, index) => (
                <li key={index} className="text-sm text-pink-700 bg-pink-200 p-2 flex rounded-md">
                  <FaTrophy className="text-yellow-500 mr-1" /> {award}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Facebook-style Interaction Section */}
        <div className="mt-4 border-t pt-3 flex justify-between text-pink-400 text-sm">
          <button className="flex items-center space-x-1 hover:text-pink-600 transition">
            <FaThumbsUp /> <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-pink-600 transition">
            <FaComment /> <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-pink-600 transition">
            <FaShare /> <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CelebrityDetail;
