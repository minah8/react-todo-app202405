import React from 'react';
import '../scss/TodoItem.scss';
import {
  MdDeleteOutline,
  MdDoneOutline,
} from 'react-icons/md';

const TodoItem = ({ item, remove }) => {
  return (
    <li className="todo-list-item">
      <div className="check-circle">
        <MdDoneOutline />
      </div>
      <span className="text">{item.title}</span>
      <div
        className="remove"
        onClick={() => remove(item.id)}
      >
        <MdDeleteOutline />
      </div>
    </li>
  );
};

export default TodoItem;
