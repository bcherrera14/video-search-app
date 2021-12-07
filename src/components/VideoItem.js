import React from 'react';
// import VideoList from './VideoList';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<li onClick={() => onVideoSelect(video)} className="d-flex list-group-item video-item align-items-start">
			<img className="card-img-left mt-2" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
			<h6 className="card-title m-2">{video.snippet.title}</h6>
		</li>
	);
};

export default VideoItem;
