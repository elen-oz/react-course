import { FC, useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todosContext';
import classes from './Todos.module.css';

const Todos: FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          // onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          onRemoveTodo={() => todoCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
