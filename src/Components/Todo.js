// import React, { useState } from "react";

// function Todo() {
//   const [todo, setTodo] = useState([]);
//   const [input, setInput] = useState("");
//   const addTodo = (e) => {
//     e.preventDefault();
//     setTodo([...todo, input]);
//     setInput("");
//   };

//   return (
//     <div>
//       <h1>To Do App</h1>

//       <form action="">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => {
//             setInput(e.target.value);
//           }}
//         />
//         <button type="submit" onClick={addTodo}>
//           Add to do list
//         </button>
//       </form>

//       <h2>To do list:</h2>
//       {todo.map((todo, index) => (
//         <h1 key={index}>{todo}</h1>
//       ))}
//     </div>
//   );
// }

// export default Todo;

import React, { useState, useEffect } from "react";

function Todo() {
  const [todo, setTodo] = useState(["hello", "hi"]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`Component loaded`);
  }, []);

  useEffect(() => {
    console.log(`I'm rerendered`);
  }, [todo]);

  const addTodo = () => {
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <div>
      <h1>To Do App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      />
      <button onClick={addTodo}>Add To Do</button>

      <hr />
      <div>To Do List</div>
      {todo.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
}

export default Todo;
