import { useEffect, useState } from "react";
import { Paper, Typography, Container, Divider } from "@material-ui/core";
import styled from "styled-components";

import { useTodo } from "../hooks/useTodoHandlers";
import CreateTodo from "../components/CreateTodo";
import Pagination from "../components/Pagination";

const StyledPaper = styled(Paper)`
  height: 500px;
  width: 500px;
  padding: 10px;
  display: flex;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  margin-top: 5px;
  font-weight: bold;
`;

export default function TodoScreen() {
  const [tasks, setTasks] = useState([
    {
      _id: 1,
      title: "Feed Dogs",
      fav: false,
    },
    {
      _id: 2,
      title: "Call parents",
      fav: false,
    },
    {
      _id: 3,
      title: "Buy a new gaming laptop",
      fav: false,
    },
  ]);
  const { addTask } = useTodo(tasks, setTasks);
  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <StyledPaper elevation={2}>
      <StyledContainer>
        <div>
          <StyledTypography variant="h5">Todo List</StyledTypography>
          <Divider />
        </div>
        <CreateTodo addTask={addTask} />
        <Pagination data={tasks} setTasks={setTasks} />
      </StyledContainer>
    </StyledPaper>
  );
}
