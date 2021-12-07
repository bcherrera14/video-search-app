import React from 'react';

const VideoCategories = () => {
	return (
		<div className="m-2">
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<i class="fas fa-home me-2" />Home
				</li>
				<li class="list-group-item">
					<i class="fas fa-chart-line me-2" />Trending
				</li>
				<li class="list-group-item">
					<i class="fas fa-trophy me-2" />Sports
				</li>
				<li class="list-group-item">
					<i class="far fa-newspaper me-2" />News
				</li>
				<li class="list-group-item">
					<i class="fas fa-tablet-alt me-2" />Technology
				</li>
			</ul>
		</div>
	);
};

export default VideoCategories;
