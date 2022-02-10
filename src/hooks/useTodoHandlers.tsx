export const useTodo = (tasks: any, setTasks: any) => {
  const addTask = (title: string) => {
    setTasks([...tasks, { title, _id: Math.random(), fav: false }]);
  };

  const deleteTask = (deteleTask: any) => {
    const deletedTask = tasks.filter((t: any) => t._id !== deteleTask);
    setTasks(deletedTask);
  };

  const handleFavTask = (task: any) => {
    const filtered = tasks.filter((t: any) => t._id !== task._id);
    const updateTask = { ...task, fav: true };

    // const favTask = [task].concat(filtered);
    const favTask = [updateTask].concat(filtered);
    setTasks(favTask);
  };

  return {
    tasks,
    handleFavTask,
    setTasks,
    addTask,
    deleteTask,
  };
};
