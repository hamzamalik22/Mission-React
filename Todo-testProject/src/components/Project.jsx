import React, { useState, useEffect } from "react";
import ProjectForm from "./ProjectForm";
import ProjectTasks from "./ProjectTasks";

function Project() {
  const [task, setTask] = useState([]);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTask(savedTasks);
    }
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const handledata = (data) => {
    setTask([...task, data]);
  };

  const removeData = (id) => {
    setTask(() => task.filter((item, index) => index !== id));
  };

  return (
    <>
      <ProjectForm handledata={handledata} task={task} />

      <ProjectTasks removeData={removeData} task={task} />
    </>
  );
}

export default Project;
