import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map((video) => {
		return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />;
	});
	return <ul className="list-group list-group-flush">{renderedList}</ul>;
};

export default VideoList;
