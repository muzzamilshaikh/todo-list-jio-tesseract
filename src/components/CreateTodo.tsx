import { TextField } from "@material-ui/core";

import { useCreateTodoHandler } from "../hooks/useCreateTodo";

interface ICreateTask {
  addTask: any;
}
export default function CreateTodo({ addTask }: ICreateTask) {
  const { handleSubmit, value, setValue } = useCreateTodoHandler(addTask);
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        label="Enter your todo task"
        value={value}
        fullWidth
        style={{ marginBottom: 10 }}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
