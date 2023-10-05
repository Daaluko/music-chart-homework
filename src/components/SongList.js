import Song from "./Song"




const SongList = ({songs}) => {

    const chartSongs = songs.map((songData) => {
        return <li><Song artist={songData["im:artist"].label} title={songData["im:name"].label}/></li>   
    })



    return (
        <>
        <ul>{chartSongs}</ul>
        
        
        </>
    )
}

export default SongList