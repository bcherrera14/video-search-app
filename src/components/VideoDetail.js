import React from 'react';
// import VideoItem from './VideoItem';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="card mt-3">
				<iframe class="embed-responsive-item" src={videoSrc} allowfullscreen />
				<div className="card-body">
					<h5 className="card-title">{video.snippet.title}</h5>
					<p className="card-text">{video.snippet.description}</p>
				</div>
				<p />
			</div>
		</div>
	);
};

export default VideoDetail;
