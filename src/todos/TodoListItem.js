import React from 'react';
import TodoList from './TodoList';
import './TodoListItem.css';

const TodoListItem = ({ todo }) => (
	<div class="todo-item-container">
		<h3>{todo.text}</h3>
		<div class="buttons-container">
			<button class="completed-button">Mark as completed</button>
			<button class="remove-button">Remove</button>
		</div>
	</div>
)

export default TodoListItem;