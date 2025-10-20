
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import type { GameState, Player, Question } from './types';
import { GameStatus } from './types';
import { GAME_DURATION } from './constants';
import StartScreen from './components/StartScreen';
import GameBoard from './components/GameBoard';
import GameOverScreen from './components/GameOverScreen';
import Scoreboard from './components/Scoreboard';
import LoadingSpinner from './components/LoadingSpinner';
import { BackgroundImage } from './assets';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameStatus.START);
  const [player, setPlayer] = useState<Player>({ id: 0, name: 'You', score: 0 });
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateFallbackQuestion = (): Question => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const answer = num1 + num2;
    return {
      question: `${num1} + ${num2} = ?`,
      options: [answer], // Options array is just for type compatibility
      answer,
    };
  };

  const fetchNewQuestion = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Generate a simple arithmetic math question for a children's game. The question should involve addition and subtraction with numbers up to 100. Provide a JSON object with the following structure: 'question' (string, e.g., '15 + 8 = ?'), and 'answer' (the correct number).`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              answer: { type: Type.NUMBER },
            },
            required: ['question', 'answer'],
          },
        },
      });

      const jsonString = response.text.trim();
      const parsedQuestion = JSON.parse(jsonString);
      setCurrentQuestion({ ...parsedQuestion, options: [parsedQuestion.answer] });
    } catch (err) {
      console.error('Failed to generate question:', err);
      setError('Could not fetch a new question. Using a fallback.');
      setCurrentQuestion(generateFallbackQuestion());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Pre-fetch the first question when the app loads to make the game start faster.
    fetchNewQuestion();
  }, [fetchNewQuestion]);

  useEffect(() => {
    if (gameState === GameStatus.PLAYING) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setGameState(GameStatus.GAME_OVER);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState]);

  const startGame = () => {
    setPlayer({ id: 0, name: 'You', score: 0 });
    setTimeLeft(GAME_DURATION);
    setGameState(GameStatus.PLAYING);
    // The first question is already pre-fetched.
  };

  const restartGame = () => {
    setGameState(GameStatus.START);
    // Pre-fetch a question for the next game.
    fetchNewQuestion();
  };
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setPlayer(prevPlayer => ({ ...prevPlayer, score: prevPlayer.score + 100 }));
    }
    fetchNewQuestion();
  };

  return (
    <div className="relative min-h-screen w-full text-white font-bold overflow-hidden">
      <BackgroundImage />
      <div className="absolute inset-0 min-h-screen flex flex-col items-center justify-center p-4">
        {gameState === GameStatus.START && <StartScreen onStart={startGame} />}
        
        {gameState === GameStatus.PLAYING && (
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4 w-full">
              {loading && <LoadingSpinner />}
              {error && <div className="text-center text-red-400 bg-red-900 bg-opacity-70 p-4 rounded-lg">{error}</div>}
              {currentQuestion && !loading && (
                <GameBoard question={currentQuestion} onAnswer={handleAnswer} />
              )}
            </div>
            <div className="md:w-1/4 w-full">
               <Scoreboard score={player.score} timeLeft={timeLeft} />
            </div>
          </div>
        )}

        {gameState === GameStatus.GAME_OVER && (
          <GameOverScreen score={player.score} onRestart={restartGame} />
        )}
      </div>
    </div>
  );
};

export default App;
