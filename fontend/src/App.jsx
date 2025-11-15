
import { useState } from 'react';
import './App.css'
import InputForm from './component/InputForm'

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

  const addTodo= (input) =>{
    const newData = {
      id:new Date().getTime(),
      task:input.task,
      description:input.description
    }
    setTodoData((prev)=>[...prev,newData]); 
  };

  console.log("to-data",todoData);
 

  return (
    <>

    <InputForm addTodo={addTodo}/>
     
    </>
  )
}

export default App
