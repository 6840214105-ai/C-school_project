
import React, { useState, useEffect } from 'react';
import type { Question } from '../types';
import Mole from './Mole';
import { malletCursor } from '../assets';

interface GameBoardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

// Positions aligned with the new BackgroundImage SVG molehills
const molePositions = [
    { top: '48%', left: '16%' }, // Bottom-left
    { top: '45%', left: '38%' }, // Bottom-middle-left
    { top: '48%', left: '65%' }, // Bottom-right
    { top: '25%', left: '26%' }, // Top-left
    { top: '23%', left: '55%' }, // Top-right
];


const GameBoard: React.FC<GameBoardProps> = ({ question, onAnswer }) => {
  const [moles, setMoles] = useState<(number | null)[]>(new Array(molePositions.length).fill(null));
  const [whackedMole, setWhackedMole] = useState<number | null>(null);

  useEffect(() => {
    setWhackedMole(null);
    const newMoles = new Array(molePositions.length).fill(null);
    const availableHoles = [...Array(molePositions.length).keys()];
    
    // Place the correct mole
    const correctHoleIndex = availableHoles.splice(Math.floor(Math.random() * availableHoles.length), 1)[0];
    newMoles[correctHoleIndex] = question.answer;

    // Place 2 decoy moles that pop up but have no number
    const decoyCount = 2;
    for (let i = 0; i < decoyCount; i++) {
        if (availableHoles.length > 0) {
            const decoyHoleIndex = availableHoles.splice(Math.floor(Math.random() * availableHoles.length), 1)[0];
            // Use a magic number to represent a decoy mole
            newMoles[decoyHoleIndex] = Number.MAX_SAFE_INTEGER;
        }
    }

    const moleAppearanceTimer = setTimeout(() => {
        setMoles(newMoles);
    }, 100);

    const moleDisappearanceTimer = setTimeout(() => {
        setMoles(new Array(molePositions.length).fill(null));
        onAnswer(false); // Count as incorrect if time runs out
    }, 3000); // Moles stay for 3 seconds

    return () => {
      clearTimeout(moleAppearanceTimer);
      clearTimeout(moleDisappearanceTimer);
    };
  }, [question, onAnswer]);

  const handleWhack = (index: number) => {
    const answer = moles[index];
    if (whackedMole !== null || answer === null) return; // Prevent multiple whacks

    setWhackedMole(index);
    const isCorrect = answer === question.answer;

    setTimeout(() => {
      onAnswer(isCorrect);
    }, 400);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-lime-700 bg-opacity-80 p-6 rounded-2xl shadow-lg border-4 border-lime-500 mb-8 w-full max-w-2xl">
        <h2 className="text-4xl md:text-5xl text-center font-fredoka text-yellow-200" style={{ textShadow: '3px 3px 0 #84cc16' }}>
          {question.question}
        </h2>
      </div>

      <div 
        className="relative w-full max-w-5xl aspect-[16/9]"
        style={{ cursor: `url(${malletCursor}), auto` }}
      >
        {molePositions.map((pos, index) => (
          <div
            key={index}
            className="absolute"
            style={{ top: pos.top, left: pos.left, width: '15%', height: '25%' }}
            onClick={() => handleWhack(index)}
          >
            <Mole
              answer={moles[index]}
              isCorrect={moles[index] === question.answer}
              isWhacked={whackedMole === index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
