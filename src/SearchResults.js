import React from "react";
import Track from "./Track";

const SearchResults = ({searchValue, onSearchResultsClicked }) => {
    const addToTrackList = (track) => {
        onSearchResultsClicked(track);
    }

    return (
        <div>
          <table>
            <tbody>
              {searchValue.map((track, index) => (
                <tr key={index}>
                  <td>
                    <Track name={track.name} artists={track.artists} />
                  </td>
                  <td>
                    {/* Corrected button to pass the correct track to the click handler */}
                    <button onClick={() => addToTrackList(track)}>Select</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
};

export default SearchResults;
