import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';

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

	deleteReminder(id) {
		this.props.deleteReminder(id);
	}

	renderReminders() {
		const { reminders } = this.props;
		return (
			<ul className="list-group col-sm-4">
				{
					reminders.map((reminder) => {
						return (
							<li key={reminder.id} className="list-group-item">
								<div className="list-item">{reminder.text}</div>
								<div onClick={() => this.deleteReminder(reminder.id)} className="list-item delete-button">
									&#x2715;
								</div>
							</li>
						);
					})
				}
			</ul>
		);
	}

 	render() {
    	return (
      		<div className="App">
				<div className="title">
					Reminder Pro
				</div>
				<div className="form-inline reminder-form">
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
				{this.renderReminders()}
			</div>
    	);
  	}
}

function mapStateToProps(state) {
	return {
		reminders: state
	}
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
