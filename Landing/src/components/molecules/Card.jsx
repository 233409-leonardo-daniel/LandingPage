import React from 'react';
import Images from '../atoms/Image';
import Button from '../atoms/Button';

const Card = ({ image, character, text, btn, bgColor }) => (
    <div className={`border rounded-lg shadow-lg ${bgColor} p-4 m-4 max-w-xs flex flex-col h-150`}>
      <div className="flex-shrink-0">
        <Images val={image} className="w-full h-40 object-cover" />
      </div>
      <div className="flex-1 mt-4">
        <h2 className="text-xl font-bold">{character}</h2>
        <p className="mt-2">{text}</p>
        <Button text={btn} className="mt-4" />
      </div>
    </div>
  );

export default Card;
