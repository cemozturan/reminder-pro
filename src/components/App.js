import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
		this.handleTextChange = this.handleTextChange.bind(this);
		this.addReminder = this.addReminder.bind(this);
	}

	handleTextChange(evt) {
		let text = evt.target.value;
		this.setState(() => {
			return {
				text
			}
		});
	}

	addReminder() {
		this.props.addReminder(this.state.text);
	}

 	render() {
    	return (
      		<div className="App">
				<div className="title">
					Reminder Pro
				</div>
				<div className="form-inline">
					<div className="form-group">
						<input
							className="form-control"
							placeholder="I have to..."
							value={this.state.text}
							onChange={this.handleTextChange}
						/>
						<button
							type="button"
							className="btn btn-success"
							onClick={this.addReminder}
						>Add Reminder</button>
					</div>
				</div>
			</div>
    	);
  	}
}

export default connect(null, { addReminder })(App);
