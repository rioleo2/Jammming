import React, { useState } from 'react';
import SearchResults from './components/SearchResults.jsx';
import Playlist from './components/Playlist.jsx';

function App() {
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Song A', artist: 'Artist A', album: 'Album A', uri: 'spotify:track:1' },
    { id: 2, name: 'Song B', artist: 'Artist B', album: 'Album B', uri: 'spotify:track:2' },
    { id: 3, name: 'Song C', artist: 'Artist C', album: 'Album C', uri: 'spotify:track:3' }
  ]);

  // Метод для добавления трека в плейлист
  const addTrack = (track) => {
    if (!playlistTracks.find(existingTrack => existingTrack.id === track.id)) {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
    }
  };

  // Метод для удаления трека из плейлиста
  const removeTrack = (track) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(existingTrack => existingTrack.id !== track.id));
  };

  // Метод для обновления названия плейлиста
  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  };

  // Метод для сохранения плейлиста
  const savePlaylist = () => {
    // Получаем массив URI треков
    const trackUris = playlistTracks.map(track => track.uri);
    
    if (!playlistName || trackUris.length === 0) {
      return; // Если нет названия или треков, не сохраняем
    }

    console.log(`Saving playlist: ${playlistName}`);
    console.log('Tracks:', trackUris);

    // Здесь можно будет отправить данные на сервер для сохранения в Spotify

    // После сохранения сбрасываем название и треки
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  };

  return (
    <div>
      <h1>Jammming</h1>
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <Playlist 
        playlistName={playlistName} 
        playlistTracks={playlistTracks} 
        onNameChange={updatePlaylistName} 
        onRemove={removeTrack} 
        onSave={savePlaylist} 
      />
    </div>
  );
}

export default App;