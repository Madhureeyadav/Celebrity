import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Celebrity from './page/Celebrity';
import CelebrityDetail from './components/CelebrityDetail'
import cardImage from './image/download.png';
import Footer from './components/Footer'
const App = () => {
  const cardData = [
    {
      id:1,
      name: "Emma Watson",
      age: 34,
      biography: "Emma Watson is a British actress, model, and activist. She is known for her role as Hermione Granger in the Harry Potter film series.",
      films: [
        "Harry Potter series",
        "Beauty and the Beast",
        "Little Women",
        "The Perks of Being a Wallflower"
      ],
      awards: [
        "MTV Trailblazer Award",
        "Teen Choice Award for Choice Movie Actress",
        "British Artists of the Year"
      ],
      image: cardImage// Add the actual image URL
    },
    {
      id:2,
      name: "Scarlett Johansson",
      age: 39,
      biography: "Scarlett Johansson is an American actress and singer. She is one of the world's highest-paid actresses and is known for her roles in the Marvel Cinematic Universe.",
      films: [
        "Lost in Translation",
        "The Avengers",
        "Marriage Story",
        "Black Widow"
      ],
      awards: [
        "BAFTA Award for Best Actress",
        "Tony Award",
        "Critics' Choice Movie Award"
      ],
      image: cardImage// Add the actual image URL
    },
    {
      id:3,
      name: "Natalie Portman",
      age: 43,
      biography: "Natalie Portman is an Israeli-American actress, director, and producer. She is known for her roles in films such as Black Swan and V for Vendetta.",
      films: [
        "Black Swan",
        "V for Vendetta",
        "Star Wars series",
        "Jackie"
      ],
      awards: [
        "Academy Award for Best Actress",
        "Golden Globe Award",
        "BAFTA Award"
      ],
      image: cardImage// Add the actual image URL
    },
    {
      id:4,
      name: "Jennifer Lawrence",
      age: 33,
      biography: "Jennifer Lawrence is an American actress. She is known for her roles in The Hunger Games series and Silver Linings Playbook.",
      films: [
        "The Hunger Games series",
        "Silver Linings Playbook",
        "American Hustle",
        "Joy"
      ],
      awards: [
        "Academy Award for Best Actress",
        "Golden Globe Awards",
        "BAFTA Award"
      ],
      image: cardImage// Add the actual image URL
    },
    {
      id:5,
      name: "Margot Robbie",
      age: 33,
      biography: "Margot Robbie is an Australian actress and producer. She gained fame for her role in The Wolf of Wall Street.",
      films: [
        "The Wolf of Wall Street",
        "I, Tonya",
        "Once Upon a Time in Hollywood",
        "Birds of Prey"
      ],
      awards: [
        "Academy Award nominations",
        "BAFTA nominations",
        "Critics' Choice Movie Award"
      ],
      image: cardImage// Add the actual image URL
    },
    {
      id:6,
      name: "Gal Gadot",
      age: 38,
      biography: "Gal Gadot is an Israeli actress and model. She is best known for her role as Wonder Woman in the DC Extended Universe.",
      films: [
        "Wonder Woman",
        "Fast & Furious series",
        "Justice League",
        "Red Notice"
      ],
      awards: [
        "MTV Movie & TV Award",
        "Kids' Choice Award",
        "Critics' Choice Super Awards"
      ],
      image: cardImage// Add the actual image URL
    },
    {
      id:7,
      name: "Meryl Streep",
      age: 74,
      biography: "Meryl Streep is an American actress, widely regarded as one of the greatest actresses of all time.",
      films: [
        "The Devil Wears Prada",
        "Sophie's Choice",
        "Kramer vs. Kramer",
        "The Iron Lady"
      ],
      awards: [
        "Three Academy Awards",
        "Golden Globe Awards",
        "BAFTA Awards"
      ],
      image: cardImage// Add the actual image URL
    },
    {
      id:8,
      name: "Anne Hathaway",
      age: 41,
      biography: "Anne Hathaway is an American actress. She gained recognition for her role in The Princess Diaries.",
      films: [
        "Les Misérables",
        "The Devil Wears Prada",
        "Interstellar",
        "The Princess Diaries"
      ],
      awards: [
        "Academy Award for Best Supporting Actress",
        "Golden Globe Award",
        "BAFTA Award"
      ],
      image: cardImage// Add the actual image URL
    },
    {
      id:9,
      name: "Jessica Chastain",
      age: 46,
      biography: "Jessica Chastain is an American actress and producer known for her work in both independent and blockbuster films.",
      films: [
        "Zero Dark Thirty",
        "The Help",
        "Interstellar",
        "Molly's Game"
      ],
      awards: [
        "Academy Award nominations",
        "Golden Globe Awards",
        "Screen Actors Guild Awards"
      ],
      image: cardImage // Add the actual image URL
    },
    {
      id:10,
      name: "Viola Davis",
      age: 58,
      biography: "Viola Davis is an American actress and producer. She is the first African American actress to achieve the Triple Crown of Acting.",
      films: [
        "Fences",
        "The Help",
        "Ma Rainey's Black Bottom",
        "Widows"
      ],
      awards: [
        "Academy Award for Best Supporting Actress",
        "Tony Awards",
        "Primetime Emmy Award"
      ],
      image: cardImage// Add the actual image URL
    }
  ];
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Celebrity cardData={cardData}/>} /> 
        <Route path="/celebrityDetail/:id" element={<CelebrityDetail cardData={cardData}/>  }  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
