import React from 'react';

function Track({ track, onAdd, onRemove, isRemoval }) {
  const addTrack = () => {
    onAdd(track);
  };

  const removeTrack = () => {
    onRemove(track);
  };

  return (
    <div>
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
      {!isRemoval && <button onClick={addTrack}>Add</button>}
      {isRemoval && <button onClick={removeTrack}>Remove</button>}
    </div>
  );
}

export default Track;
