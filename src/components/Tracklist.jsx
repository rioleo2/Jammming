import React from 'react';
import Track from './Track';

function TrackList({ tracks, onAdd, onRemove, isRemoval }) {
    return (
      <div>
        {tracks.map(track => (
          <Track 
            key={track.id} 
            track={track} 
            onAdd={onAdd} 
            onRemove={onRemove} 
            isRemoval={isRemoval} 
          />
        ))}
      </div>
    );
  }
  
  export default TrackList;