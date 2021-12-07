import React from 'react';
import './VideoCategories.css';

const VideoCategories = ({ onCategorySelect }) => {
	return (
		<div className="m-2">
			<ul class="list-group list-group-flush">
				<li onClick={() => onCategorySelect('frontend')} class="list-group-item category-item">
					<i class="fas fa-home me-2" />Home
				</li>
				<li onClick={() => onCategorySelect('daily dose')} class="list-group-item category-item">
					<i class="fas fa-chart-line me-2" />Trending
				</li>
				<li onClick={() => onCategorySelect('espn')} class="list-group-item category-item">
					<i class="fas fa-trophy me-2" />Sports
				</li>
				<li onClick={() => onCategorySelect('doug demuro')} class="list-group-item category-item">
					<i class="fas fa-car me-2" />Cars
				</li>
				<li onClick={() => onCategorySelect('mkbhd')} class="list-group-item category-item">
					<i class="fas fa-tablet-alt me-2" />Technology
				</li>
			</ul>
		</div>
	);
};

export default VideoCategories;
