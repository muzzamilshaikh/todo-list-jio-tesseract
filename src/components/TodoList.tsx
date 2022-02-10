import { Fragment } from "react";

import Todo from "./Todo";
import { useTodo } from "../hooks/useTodoHandlers";

interface IProps {
  currentItems: any;
  setTasks: any;
  data: any;
}
export default function TodoList({ currentItems, setTasks, data }: IProps) {
  const { deleteTask, handleFavTask } = useTodo(data, setTasks);
  return (
    <>
      {currentItems.map((todo: any, index: number) => {
        return (
          <Fragment key={index}>
            <Todo
              task={todo}
              deleteTask={deleteTask}
              handleFavTask={handleFavTask}
            />
          </Fragment>
        );
      })}
    </>
  );
}
