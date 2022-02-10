import { useState } from "react";

export const useCreateTodoHandler = (addTask: any) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };
  return {
    handleSubmit,
    value,
    setValue,
  };
};
