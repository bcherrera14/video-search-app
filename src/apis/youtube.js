import axios from 'axios';

const KEY = 'AIzaSyCV-4boXwHZmbekIHLRVd_Y3HN-jH50Eb0';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: KEY
	}
});
