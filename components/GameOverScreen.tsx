
import React from 'react';

interface GameOverScreenProps {
  score: number;
  onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-8 rounded-2xl shadow-2xl animate-fade-in">
      <h2 className="text-6xl font-fredoka text-yellow-400 mb-4" style={{ textShadow: '4px 4px 0 #000' }}>Game Over!</h2>
      <p className="text-3xl text-white mb-2">Your Final Score:</p>
      <p className="text-8xl font-fredoka text-lime-400 mb-8" style={{ textShadow: '5px 5px 0 #000' }}>{score}</p>
      <button
        onClick={onRestart}
        className="font-fredoka text-4xl text-white bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-105 px-10 py-3 rounded-full border-4 border-white shadow-lg"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOverScreen;
