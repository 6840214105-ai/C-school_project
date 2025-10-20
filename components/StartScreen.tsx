import React from 'react';
import { TitleImage } from '../assets';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-30 rounded-2xl shadow-2xl">
      <div 
        className="w-full max-w-3xl px-4"
        aria-label="Welcome screen with cartoon animals"
      >
        <TitleImage />
      </div>
      <button
        onClick={onStart}
        className="mt-[-2rem] md:mt-[-4rem] font-fredoka text-5xl md:text-7xl text-white bg-orange-500 hover:bg-orange-600 transition-transform transform hover:scale-105 px-12 py-4 rounded-full border-4 border-white shadow-lg"
      >
        START
      </button>
    </div>
  );
};

export default StartScreen;
