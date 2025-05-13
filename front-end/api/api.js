// Fetch ou Axios
import axios from "axios"

const URL = "http://localhost:3000";

const resposeArtists = await axios.get(`${URL}/artists`);
const resposeSongs = await axios.get(`${URL}/songs`);

export const artistsArrayApi = resposeArtists.data;
export const songsArrayApi = resposeSongs.data;