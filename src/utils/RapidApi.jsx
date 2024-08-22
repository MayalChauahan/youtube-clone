import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    }catch(error){
        console.error("error fetching api data: ", error);
        throw error;
    }
};

// VITE_YOUTUBE_API_KEY01="cad98b4faamshcb6cab467cc60e9p1d81f6jsn795a2e6c0c35"
// VITE_YOUTUBE_API_KEY02="053410671cmshe8489db51cfef33p18077ejsna762771fb91b"
// VITE_YOUTUBE_API_KEY="323d60f424msha7765b66e25b46ep1e9512jsnb2ecc5e22506"