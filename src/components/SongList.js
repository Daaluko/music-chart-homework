import Song from "./Song"




const SongList = ({songs}) => {

    const chartSongs = songs.map((songData) => {
        return <li><Song artist={["im:artist".label]}>{["im:name".label]}</Song></li>   
    })



    return (
        <>
        <ul>{chartSongs}</ul>
        
        
        </>
    )
}

export default SongList