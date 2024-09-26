import React, {useState,useEffect} from "react";

const SearchBar = (props) =>{

    const [inputValue,  setInputValue] = useState("");

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${inputValue}&type=track`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        })

        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if(jsonResponse.tracks) {props.setSearchResults(jsonResponse.tracks.items);}
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
            <button type="submit">Search</button>
        </form>   
        )
}

export default SearchBar