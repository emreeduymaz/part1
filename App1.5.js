import React from "react";
const App = () => {
  const course = "Half Stack application development";

  const object1 = {
    name: "Fundamentals of React",
    exercises: 10, 
  }
  const object2 = {
    name: "Using props to pass data",
      exercises: 7, 
  }
  const object3 = {
    name: "State of a component",
      exercises: 14, 
  }


  return (
    <div>
      <p>course={course}</p>
      <p>{object1.name} {object1.exercises}</p>
      <p>{object2.name} {object2.exercises}</p>
      <p>{object3.name} {object3.exercises}</p>
    </div>
  );
};
export default App;
