import React from 'react';
import { Form } from 'react-bootstrap';

class SearchBar extends React.Component {
	state = { searchTerm: '' };

	onInputChange = (event) => {
		this.setState({ searchTerm: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<div className="card search-bar">
				<Form onSubmit={this.onFormSubmit}>
					<Form.Group className="m-3" controlId="videoSearch">
						<Form.Label>Video Search</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							onChange={this.onInputChange}
							value={this.state.searchTerm}
						/>
					</Form.Group>
				</Form>
			</div>
		);
	}
}

export default SearchBar;
