import { useState, useEffect } from "react";
import SongList from "../components/SongList";


const ChartContainer = () => {
    const [songs, setSongs] = useState([]);


    useEffect(() => {
        getSongs();

    }, [])

    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then( res => res.json())
        .then(allData => allData.feed.entry)
        .then(songs => setSongs(songs))
        // setSongs(["lalala", "ooo o o "]) - method to test that things are working but the data isn't connecting properly
    }




    return (
        <>
        <h1>Top 20 Songs</h1>
        <SongList songs={songs}/>
        
        </>
    )

}

export default ChartContainer