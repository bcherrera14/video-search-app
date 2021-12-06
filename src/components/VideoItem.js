import React from 'react';
// import VideoList from './VideoList';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<li onClick={() => onVideoSelect(video)} className="d-flex list-group-item video-item align-items-center">
			<img className="card-img-left" src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
			<h5 className="card-title m-2">{video.snippet.title}</h5>
		</li>
	);
};

export default VideoItem;
