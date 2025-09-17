import React, { useState } from 'react';
import FlipCard from './components/FlipCard';
import type { CardData } from './types';

const INITIAL_CARDS: CardData[] = [
  {
    id: 1,
    frontText: "I miss you",
    backImage: "C:\Users\rishi\OneDrive\her\Onn.jpg"
  },
  {
    id: 2,
    frontText: "Remember this?",
    backImage: "C:\Users\rishi\OneDrive\her\Randu.jpg"
  },
  {
    id: 3,
    frontText: "For better times",
    backImage: "C:\Users\rishi\OneDrive\her\Moon.jpg"
  }
];

const App: React.FC = () => {
  const [cards] = useState<CardData[]>(INITIAL_CARDS);
  const [currentPage, setCurrentPage] = useState<'home' | 'memories' | 'final'>('home');

  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-rose-50 text-gray-800 flex flex-col items-center justify-center p-4 text-center">
        <div className="animate-fade-in">
          <h2 className="font-pacifico text-4xl sm:text-6xl text-rose-500 mb-6">Made this to make you feel good...</h2>
          <p className="text-lg sm:text-2xl text-gray-600 mb-12">Don't know if this helps but still...</p>
          <button
            onClick={() => setCurrentPage('memories')}
            className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105"
            aria-label="Proceed to the main page"
          >
            Proceed
          </button>
        </div>
      </div>
    );
  }

  if (currentPage === 'memories') {
    return (
      <div className="min-h-screen bg-rose-50 text-gray-800 p-4 sm:p-8">
        <div className="container mx-auto max-w-5xl">
          <header className="text-center mb-12">
            <h1 className="font-pacifico text-5xl sm:text-7xl text-rose-500 mb-2">Koruuu...</h1>
            <p className="text-lg text-gray-600">Words aren't enough, but maybe our memories can help.</p>
          </header>

          <main>
            <div className="flex flex-wrap justify-center items-start gap-8">
              {cards.map((card) => (
                <FlipCard key={card.id} frontText={card.frontText} backImage={card.backImage} />
              ))}
            </div>
          </main>
          
          <div className="text-center mt-16">
            <button
              onClick={() => setCurrentPage('final')}
              className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105"
              aria-label="Proceed to the final message"
            >
              One last thing...
            </button>
          </div>

          <footer className="text-center mt-16 text-gray-400">
              <p>Made with a heavy heart.</p>
          </footer>
        </div>
      </div>
    );
  }
  
  if (currentPage === 'final') {
    return (
      <div className="min-h-screen bg-rose-50 text-gray-800 flex flex-col items-center justify-center p-4 text-center">
        <div className="animate-fade-in">
          <h2 className="font-pacifico text-5xl sm:text-7xl text-rose-500 flex items-center justify-center">
            I Love You
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 sm:h-20 sm:w-20 ml-4 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </h2>
        </div>
      </div>
    );
  }
  
  return null;
};

export default App;
