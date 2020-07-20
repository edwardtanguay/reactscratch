import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
	const [inputValue, setInputValue] = useState('');
	return (
		<div className="new-todo-form">
			<input className="new-todo-input"
				value={inputValue}
				placeholder="Type new todo here"
				onChange="{e => setInputValue(e.target.value)}"
				type="text" />
			<button className="new-todo-button">Create todo</button>
		</div>
	);
}

export default NewTodoForm;