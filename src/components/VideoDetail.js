import React from 'react';
// import VideoItem from './VideoItem';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	return (
		<div className="card">
			<div className="card-body">
				<h4 className="card-title">{video.snippet.title}</h4>
				<p className="card-text">{video.snippet.description}</p>
			</div>
			<p />
		</div>
	);
};

export default VideoDetail;
