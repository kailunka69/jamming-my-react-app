import React, { useState } from "react";
import Track from "./Track";

const TrackList = ({ trackList, onTrackClicked }) => {
  const [playListName, setPlayListName] = useState("");  // Call useState properly
  
  const removeTrack = (track) => {
    onTrackClicked(track);
  };
  
  const createNewPlaylist = (e) => {
    
  };
  
  return (
    <div>
      <input
        type="text"
        name="playlistName"
        value={playListName}
        onChange={(e) => setPlayListName(e.target.value)} // Correct event access
        placeholder="Enter playlist name"
      />
      <table>
        <tbody>
          {trackList.map((track, index) => (
            <tr key={index}>
              <td>
                <Track name={track.name} artists={track.artists} />
              </td>
              <td>
                <button onClick={() => removeTrack(track)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={createNewPlaylist}>Create Playlist</button> {/* Add a label */}
    </div>
  );
};

export default TrackList;
