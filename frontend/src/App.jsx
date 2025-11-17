
import { useState } from 'react';
import './App.css'
import InputForm from './component/InputForm'
import TodoList from './component/TodoList';

function App() {

  const initialState = [
     {
      id: 1,
      task: "learn",
      description: "learn react",
    },
    {
      id: 2,
      task: "practice",
      description: "practice react in detail",
    },
  ];

  const [todoData,setTodoData] = useState(initialState);
  const [editval,setEditval] = useState(null);

  const addTodo= (input) =>{
    if(!input.task  || !input.description){
      return alert("please provide task and description data")
    }
    else if(editval){
      setTodoData((preData)=>
        preData.map((t)=>t.id === editval.id?{...t,task:input.task,description:input.description}:t
    )
  );
  setEditval(null)
    }

    else{
          const newData = {
      id:new Date().getTime(),
      task:input.task,
      description:input.description
    }
    setTodoData((prev)=>[...prev,newData]); 

    try{
      const res = await
    }
    }
  };

const editTodo = (id) =>{
  const editValue = todoData.find((t)=>t.id === id);
  setEditval(editValue)
}

const deleteTodo = (id) =>{
  const deleteVal = todoData.filter((t)=>t.id !== id);
  setTodoData(deleteVal);
}
 

  return (
    <>

    <InputForm addTodo={addTodo} editval={editval}/>
    <TodoList todoData={todoData}editTodo={editTodo} deleteTodo={deleteTodo}/>
     
    </>
  )
}

export default App
