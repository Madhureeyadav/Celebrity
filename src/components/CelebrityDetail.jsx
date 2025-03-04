// CelebrityDetail.js
import React, { useEffect, useState } from 'react'; // Import useState and useEffect
import { useParams , useNavigate} from 'react-router-dom';

const CelebrityDetail = ({ cardData }) => {
  const { id } = useParams(); // Get the celebrity ID from the URL
  const [celebrity, setCelebrity] = useState(null); // State to hold celebrity data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // State to handle errors

  useEffect(() => {
    const foundCelebrity = cardData.find((celeb) => celeb.id === parseInt(id));
    if (foundCelebrity) {
      setCelebrity(foundCelebrity); // Set the found celebrity
    } else {
      setError('Celebrity not found'); // Set error if not found
    }
    setLoading(false); // Set loading to false after fetching
  }, [id, cardData]); // Dependency array includes id and cardData

  if (loading) return <p className="text-center">Loading...</p>; // Render loading state
  if (error) return <p className="text-center">{error}</p>; // Render error state
  if (!celebrity) return <p className="text-center">Celebrity not found!</p>; // Render if celebrity is not found

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg my-6 mx-auto border-2 border-yellow-400 bg-white rounded-lg shadow-lg p-6">
      <button 
          onClick={() => navigate('/')} // Navigate back to CelebrityCard
          className="mb-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-300"
        >
          back
        </button>
        <img 
          src={celebrity.image} 
          alt={celebrity.name} 
          className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-yellow-300 transition-transform duration-300 transform hover:scale-105" 
        />
        <h1 className="text-3xl font-bold text-center text-pink-600 mt-2">{celebrity.name}</h1>
        <h2 className="text-xl font-semibold text-center text-pink-400 mt-1">Age: {celebrity.age}</h2>
        <p className="text-gray-600 text-center mt-2">Description: {celebrity.biography}</p>

        <h3 className="text-lg font-semibold mt-4 text-pink-600 pt-2 pb-2">Films:</h3>
<ul className="list-disc list-inside ml-4 space-y-2">
  {celebrity.films.map((film, index) => (
    <li key={index} className="flex items-center text-gray-700 hover:text-blue-500 transition duration-300">
      <svg className="w-5 h-5 mr-2 text-yellow-500 " fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
      </svg>
      {film}
    </li>
  ))}
</ul>

<h3 className="text-lg font-semibold mt-4 text-pink-600  pt-2 pb-2">Awards:</h3>
<ul className="list-disc list-inside ml-4 space-y-2">
  {celebrity.awards.map((award, index) => (
    <li key={index} className="flex items-center text-gray-700 hover:text-blue-500 transition duration-300">
      <svg className="w-5 h-5 mr-2 text-yellow-500  " fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
      </svg>
      {award}
    </li>
  ))}
</ul>

      </div>
    </div>
  );
};

export default CelebrityDetail; // Correct export statement
