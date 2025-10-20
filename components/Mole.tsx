
import React, { useMemo } from 'react';
import { RedPanda, Rabbit, Koala, Hamster } from '../assets';

const animalComponents = [RedPanda, Rabbit, Koala, Hamster];

const Mole: React.FC<{
  answer: number | null;
  isCorrect: boolean;
  isWhacked: boolean;
}> = ({ answer, isCorrect, isWhacked }) => {
  const AnimalComponent = useMemo(() => animalComponents[Math.floor(Math.random() * animalComponents.length)], [answer]);

  const whackEffect = isWhacked ? (
    <div className="absolute inset-0 flex items-center justify-center z-30">
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${isCorrect ? 'text-yellow-400' : 'text-red-500'} animate-ping opacity-75`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
    </div>
  ) : null;

  const isDecoy = answer === Number.MAX_SAFE_INTEGER;

  return (
    <div className="relative w-full h-full flex items-end justify-center group cursor-pointer">
      <div 
        className={`absolute bottom-0 w-full transform transition-transform duration-300 ease-out ${answer !== null ? '-translate-y-1/4' : 'translate-y-full'}`}
      >
        <div className="relative w-full h-full flex flex-col items-center">
            <div className={`w-full object-contain drop-shadow-lg transition-transform duration-200 ${isWhacked ? 'rotate-[-30deg] scale-90 opacity-70' : 'group-hover:scale-110'}`}>
              <AnimalComponent />
            </div>
            {answer !== null && !isWhacked && !isDecoy && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-blue-800 font-fredoka text-xl lg:text-3xl px-3 py-1 rounded-full border-4 border-blue-400 shadow-md whitespace-nowrap">
                {answer}
              </div>
            )}
        </div>
      </div>
      {whackEffect}
    </div>
  );
};

export default Mole;
