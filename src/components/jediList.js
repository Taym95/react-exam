import React from 'react';

function JediList({jedi}) {
  return (
    <ul>
      {jedi.map((jedi, index) => (
        <div key={index}>
          Jedi: id: {jedi.id}
          name: {jedi.name}
        </div>
      ))}
    </ul>
  );
}

export default JediList;
