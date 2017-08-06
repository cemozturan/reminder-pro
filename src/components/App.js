import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			dueDate: ''
		}
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.addReminder = this.addReminder.bind(this);
		this.clearReminders = this.clearReminders.bind(this);
	}

	handleTextChange(evt) {
		let text = evt.target.value;
		this.setState(() => {
			return {
				text
			}
		});
	}

	handleDateChange(evt) {
		let dueDate = evt.target.value;
		this.setState(() => {
			return {
				dueDate
			}
		});
	}

	addReminder() {
		const { text, dueDate } = this.state;
		this.props.addReminder(text, dueDate);
		this.setState(() => {
			return {
				text: '',
				dueDate: ''
			};
		});
	}

	clearReminders() {
		this.props.clearReminders();
	}

	deleteReminder(id) {
		this.props.deleteReminder(id);
	}

	getFromNowDate(dueDate) {
		return moment(new Date(dueDate)).fromNow();
	}

	renderReminders() {
		const { reminders } = this.props;
		return (
			<ul className="list-group col-sm-4">
				{
					reminders.map((reminder) => {
						return (
							<li key={reminder.id} className="list-group-item">
								<div className="list-item">
									<div>{reminder.text}</div>
									<div><em>{this.getFromNowDate(reminder.dueDate)}</em></div>
								</div>
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
						<input
							className="form-control"
							type="datetime-local"
							value={this.state.dueDate}
							onChange={this.handleDateChange}
						/>
						<button
							type="button"
							className="btn btn-success"
							onClick={this.addReminder}
						>Add Reminder</button>
					</div>
				</div>
				{this.renderReminders()}
				<button
					type="button"
					className="btn btn-danger"
					onClick={this.clearReminders}
				>Clear Reminders</button>
			</div>
    	);
  	}
}

function mapStateToProps(state) {
	return {
		reminders: state
	}
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
