
import React, { useState } from 'react';

interface FlipCardProps {
  frontText: string;
  backImage: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontText, backImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group w-64 h-80 [perspective:1000px] cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center p-6 text-center [backface-visibility:hidden]">
          <p className="font-pacifico text-3xl text-rose-500">{frontText}</p>
          <span className="absolute bottom-4 text-xs text-gray-400">Click to flip</span>
        </div>
        
        {/* Back of the card */}
        <div className="absolute w-full h-full bg-gray-100 rounded-xl shadow-lg border border-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            src={backImage}
            alt="A memorable moment"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
