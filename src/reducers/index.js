import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => {
	const { text, dueDate } = action.payload;
	return {
		text,
		dueDate,
		id: Math.random()
	}
}

const reminders = (state = [], action) => {
	let reminders = null;
	switch(action.type) {
		case ADD_REMINDER:
			reminders = [...state, reminder(action)];
			return reminders;
		case DELETE_REMINDER:
			reminders = state.filter((reminder) => reminder.id !== action.id);
			return reminders;
		default:
			return state;
	}
}

export default reminders;
