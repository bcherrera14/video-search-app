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
			<div className="ratio ratio-16x9 mt-3">
				<iframe title="video player" src={videoSrc} allowFullScreen />
			</div>
			<div className="card mt-3 ">
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
