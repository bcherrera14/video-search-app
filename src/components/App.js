import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoCategories from './VideoCategories';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('traversy media');
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="container">
					<div className="row">
						<div className="col-3">
							<VideoCategories onCategorySelect={this.onTermSubmit} />
						</div>
						<div className="col-6">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="col-3 mt-2">
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos.slice(1)} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
