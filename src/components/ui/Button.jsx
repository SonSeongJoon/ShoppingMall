import React from 'react';

export default function Button({ text, onClick }) {
   return (
      <button
         className="bg-blue-950 p-2 text-white rounded-md hover:brightness-150"
         onClick={onClick}
      >
         {text}
      </button>
   );
}
