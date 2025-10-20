
import React from 'react';

interface ScoreboardProps {
  score: number;
  timeLeft: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, timeLeft }) => {
  return (
    <div className="bg-stone-800 bg-opacity-70 p-4 rounded-2xl border-4 border-stone-600 h-full flex flex-col">
      <div className="text-center mb-4">
        <div className="text-2xl text-yellow-300 font-fredoka">TIME</div>
        <div className="text-6xl text-white font-fredoka" style={{ textShadow: '3px 3px 0 #000' }}>
            {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:{String(timeLeft % 60).padStart(2, '0')}
        </div>
      </div>

      <div className="text-center mb-4 bg-stone-900 p-3 rounded-lg flex-grow flex flex-col justify-center">
        <div className="text-xl text-lime-300 font-fredoka">YOUR SCORE</div>
        <div className="text-5xl text-white font-fredoka">{score}</div>
      </div>
    </div>
  );
};

export default Scoreboard;