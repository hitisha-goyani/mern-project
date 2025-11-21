
import { useEffect, useState } from 'react';
import './App.css'
import InputForm from './component/InputForm'
import TodoList from './component/TodoList';
import axios from "axios";

function App() {

  // const initialState = [
  //    {
  //     id: 1,
  //     task: "learn",
  //     description: "learn react",
  //   },
  //   {
  //     id: 2,
  //     task: "practice",
  //     description: "practice react in detail",
  //   },
  // ];

  const [todoData,setTodoData] = useState([]);
  const [editval,setEditval] = useState(null);

  useEffect(()=>{
    const fetchData  = async ()=>{
      try{

        const res = await axios.get("http://localhost:5000/task/allTask");

        if(res.status !== 200){
          throw new error("failed to load data")
        }
        setTodoData(res.data.taskData);

      }catch(error){
        console.log(error.message)
      }
    }
    fetchData();
  },[])


//add todo
  const addTodo = async (input) =>{
    if(!input.task  || !input.description){
      return alert("please provide task and description data")
    }
    else if(editval){
      setTodoData((preData)=>
        preData.map((t)=>t._id === editval._id
      ?{...t, task:input.task, description:input.description}
      :t
    )
  );

  const updateTodoData = {
    task:input.task,
    description:input.description
  };

  await axios.patch(
    `http://localhost:5000/task/${editval._id}`,
    updateTodoData,
    {
      headers:{
        "Content-Type":"application/json",
      }
    }
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
      const res = await axios.post("http://localhost:5000/task/add",newData);

      if(res.status == 201 ){
        alert("data added suceesfully");
      }
      else{
        throw new Error("failed to create data");
      }
    }catch(error){
      alert(error.message);
    }
    }
  };

const editTodo = (id) =>{
    console.log("edit ID", id);
  const editValue = todoData.find((t)=>t._id === id);
  setEditval(editValue)
}

const deleteTodo = async(id) =>{
  const deleteVal = todoData.filter((t)=>t._id !== id);
  setTodoData(deleteVal);

  try{

    const res = await axios.delete(`http://localhost:5000/task/${id}`);

    if(res.status !== 200){
      throw new Error("failed to delete data");
    }
    else{
      alert("data deleted")
    }

  }catch(error){

     console.log(error.message);

  }
}
 
  
  return (
    <>

    <InputForm addTodo={addTodo} editval={editval}/>
    <TodoList todoData={todoData}editTodo={editTodo} deleteTodo={deleteTodo}/>
     
    </>
  )
}

export default App
