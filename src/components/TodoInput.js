import React from 'react';
import '../scss/TodoInput.scss';
import { RiHeartAdd2Fill } from 'react-icons/ri';

const TodoInput = () => {
  return (
    <>
      <div className="form-wrapper">
        <form className="insert-form">
          <input
            type="text"
            placeholder="할 일을 입력 후 , 엔터를 누르세요!"
          />
        </form>
      </div>

      <button className="insert-btn">
        <RiHeartAdd2Fill />
      </button>
    </>
  );
};

export default TodoInput;
