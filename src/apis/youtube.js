import axios from 'axios';

const KEY = 'AIzaSyCkgRoHBTU53u7_BrXh35HqAfcHwknfKp0';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: KEY
	}
});
