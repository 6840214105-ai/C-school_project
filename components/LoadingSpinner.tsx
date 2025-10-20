
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-white">
        <div className="w-16 h-16 border-8 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-2xl font-bold">Generating new question...</p>
    </div>
  );
};

export default LoadingSpinner;
