import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = (text, dueDate) => {
	const action = {
		type: ADD_REMINDER,
		payload: {
			text,
			dueDate
		}
	}
	return action;
}

export const deleteReminder = (id) => {
	const action = {
		type: DELETE_REMINDER,
		id
	}
	return action;
}
