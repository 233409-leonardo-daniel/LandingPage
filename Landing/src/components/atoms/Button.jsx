import React from 'react';

function Button({ onClick, text, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-900 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
