import React from 'react';
import TrackList from './Tracklist.jsx';

function SearchResults({ searchResults, onAdd }) {
  return (
    <div>
      <h2>Search Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
