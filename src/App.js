import logo from './logo.svg';
import './App.css';
import  React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import TrackList from './TrackList'

const client_id = 'c1a5913853064db2951bef604d4c7f8e';
const redirect_uri = 'http://localhost:3000/';
var url = 'https://accounts.spotify.com/authorize';

url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
      // Extract the access token from the URL
      const params = new URLSearchParams(hash.substring(1)); // Remove the `#`
      const accessToken = params.get('access_token');

      if (accessToken) {
        setToken(accessToken); // Store the token in state
        console.log('Access Token:', accessToken);
        // Optionally, you can now make API requests using this token
      }
    } else {
      // Redirect to Spotify authorization if no token found
      window.location.href = url;
    }

  }, []);

  const [searchValue, setSearchValue] = useState([]);
  const [trackList, setTrackList] = useState([]);


  const getSearchValue = (items) => {
    setSearchValue(items);
    console.log(searchValue)
  }

  const onSearchResultsClicked = (track) => {
    if(!trackList.some((t) => t === track)) {
    setTrackList((prev) => [track, ...prev]);}
  }

  const onTrackClicked = (track) => {
    setTrackList((prev) => {
      // Filter out the track by checking for matching properties, such as the name
      return prev.filter((t) => t.name !== track.name);
    });
  };

  if (token) {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <SearchBar setSearchResults={getSearchValue} token={token}/>
          <div className='table'>
            <SearchResults  searchValue={searchValue} onSearchResultsClicked={onSearchResultsClicked}/>
            <TrackList trackList={trackList}  onTrackClicked={onTrackClicked} />
          </div>
        </main>
      </div>
    )
   } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Loading...</h1>
        </header>
      </div>
    )

  } 
}
export default App;
