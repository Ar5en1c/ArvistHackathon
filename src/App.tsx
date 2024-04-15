import React, { useState } from "react";

interface TaskItem {
  id: number;
  title: string;
  desc: string;
  comp: boolean;
}

const App = () => {
  const data: TaskItem[] = [
    {
      id: 0,
      title: "HTML",
      desc: "aeongoand",
      comp: false,
    },
    {
      id: 1,
      title: "aiusbf",
      desc: "ihf",
      comp: false,
    },
    {
      id: 2,
      title: "sahni",
      desc: "oknosg",
      comp: false,
    },
    {
      id: 3,
      title: "98hf",
      desc: "jn9g8",
      comp: false,
    },
  ];

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState<TaskItem[]>(data);
  const [taskIdCnt, setTaskIdCnt] = useState<number>(data.length);

  const addTask = () => {
    if (!title || !desc) {
      window.alert(
        "Improper Input: Please enter title and description to add task."
      );
      return;
    }

    const newTask: TaskItem = {
      id: taskIdCnt,
      title: title,
      desc: desc,
      comp: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDesc("");
    setTaskIdCnt(taskIdCnt + 1);
  };

  const complete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, comp: !task.comp } : task
      )
    );
  };

  const uncompletedTasksCount = tasks.filter((task) => !task.comp).length;

  return (
    <>
      <div className="flex-auto bg-green-600 text-center font-extrabold p-5">
        T00.D00
      </div>
      <div className="flex bg-gray-200 justify-evenly p-5 m-5">
        <label>Task Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Task title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Task Description:</label>
        <input
          type="text"
          id="Desc"
          placeholder="Description.."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="w-16 bg-green-500 text-center" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="flex flex-wrap -mx-4 p-5">
        {tasks.map((task) => (
          <div key={task.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
              className={`p-4 border rounded-md ${
                task.comp ? "bg-gray-200" : "bg-white"
              }`}
            >
              <h4 className={`font-bold ${task.comp ? "line-through" : ""}`}>
                {task.title}
              </h4>
              <p className="text-gray-600">{task.desc}</p>
              <button
                className={`mt-2 px-4 py-2 rounded-md ${
                  task.comp ? "bg-gray-400" : "bg-red-500"
                } text-white hover:bg-red-600 focus:outline-none`}
                onClick={() => complete(task.id)}
              >
                {task.comp ? "Undo" : "Complete"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <p>Uncompleted tasks: {uncompletedTasksCount}</p>
      </div>
    </>
  );
};

export default App;
