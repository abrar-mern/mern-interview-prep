import axios from "axios";
import React, { useEffect, useState } from "react";

export const useGif = (tag) => {
    const [gif,setGif] = useState(" ");
    const [loading, setLoading] = useState(false)
    const API_KEY = process.env.REACT_APP_GIPHY_KEY;

    const fetchData = async (tag) => {
        const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        setLoading(true);
        const response = await axios.get(tag?(tagMemeUrl): (randomMemeUrl))
        const finalPath = response.data.data.images.downsized_large.url;
        setGif(finalPath);
        setLoading(false);
    }
    useEffect(() => {
        fetchData()
    },[])
    return {gif, loading, fetchData}
}