import React, { useState, useEffect, use } from "react";

const Tutorial = () => {

    const [todos,setTodos] = useState([]);
    console.log(todos);
    const [todoInput,setTodoInput] = useState("");
    const [id,setId] = useState(1);

    const handleKeyDown = (e)=>{
if(e.key === "Enter"){
    setTodos((prev)=>[...prev,{id:id,text : e.target.value}]);
    setId((prev)=>++prev);
    setTodoInput("");
}
    } 
    
    return(
        <div>
            <input type="text" 
            placeholder="djfkd"
             value={todoInput}
             onChange={(e)=> setTodoInput(e.target.value)}
             onKeyDown={handleKeyDown}
              />
              {todos.map((item)=>{
                return <div key={item?.id}>{item.text} - {item.id}   </div>;
      })}
    </div>
       
    )

//   const [todos, setTodos] = useState([]);
//   const [todoInput, setTodoInput] = useState("");
//   const [id, setId] = useState(1);

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//         setTodos((prev) => [...prev, { id: id, text: e.target.value }]);
//         setId((prev) => ++prev);

//       setTodoInput("");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={todoInput}
//         onChange={(e) => setTodoInput(e.target.value)}
//         onKeyDown={handleKeyDown}
//         placeholder="type something..."
//       />

//       {todos.map((item) => {
//         return <div key={item?.id}>{item.text} - {item.id}   </div>;
//       })}
//     </div>
//   );
};
export default Tutorial;
