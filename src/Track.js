const Track = (props) => {
    const artists = props.artists.map(artist => artist.name).join(', ');
    return (
        <>
            <p>{props.name}</p>
            <p>{artists}</p>
        </>
    );
}

export default Track;
