import axios from 'axios';

const KEY = 'AIzaSyCHNbpzPJWZaVhaG6Q-zlLcozxiGy3-Wfk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY 
  }
});