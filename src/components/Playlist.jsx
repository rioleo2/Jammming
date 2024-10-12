import React from 'react';
import TrackList from './Tracklist.jsx';

function Playlist({ playlistName, playlistTracks, onNameChange, onRemove, onSave }) {
    const handleNameChange = (event) => {
      onNameChange(event.target.value);
    };
  
    return (
      <div>
        {/* Поле для ввода названия плейлиста */}
        <input 
          value={playlistName} 
          onChange={handleNameChange} 
          placeholder="Enter playlist name"
        />
        {/* Список треков */}
        <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
        {/* Кнопка для сохранения плейлиста */}
        <button onClick={onSave}>Save to Spotify</button>
      </div>
    );
  }
  
  export default Playlist;