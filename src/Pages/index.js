import React, { useEffect, useState } from "react";

export default () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, { task: task, done: false }]);
  };

  const deleteTask = (taskIndex) => {
    console.log(taskIndex);
    setList(list.filter((task, index) => index != taskIndex));
  };

  const setTaskDone = (doneState, taskIndex) => {
    // setList(
    //   list.map((task, index) =>
    //     index == taskIndex ? { ...task, done: true } : task
    //   )
    // );
    // console.log(list);
    let tempList = list;
    tempList[taskIndex].done = !doneState;
    setList(tempList);
    console.log(tempList);
  };

  //   useEffect(() => {
  //     setTaskDone();
  //   }, [list]);

  return (
    <>
      <input
        type="text"
        placeholder="enter your task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => addTask()}>Submit</button>
      {list.length > 0 ? (
        <ul key={Math.random() + Date.now()}>
          {list.map((value, index) => (
            <li key={index}>
              <input
                type="checkbox"
                defaultChecked={value.done}
                onChange={(e) => setTaskDone(value.done, index)}
              />
              {index}:{value.task}
              <button onClick={() => deleteTask(index)}>delete</button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
