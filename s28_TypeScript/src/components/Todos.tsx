import { FC } from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';

const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
