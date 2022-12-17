
import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import Box from "./Box";
import Input from "./Input";

function Todo() {
  const [todos,setToDo] = useState([]);

  const removeToDo = (id) => {
    console.log(id);
    const newTodos = todos.filter(
       (d,index) => {
          if(index !== id){
            return true;
          }else{
            return false;
          }
       }
    )
    setToDo(newTodos); // state update
  }

  const addToDoHandler = (item) => {
    // console.log(item);
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  return (
        
        <Html position={[0, 0.05, -10]} transform occlude className="rounded-[20px] drop-shadow-lg p-2 mx-auto w-[500px] min-h-[300px] shadow-2xl bg-white">
          {/* hello */}
            <Input handler={addToDoHandler} />
            <Box data={todos} removeHandler={removeToDo}/>
        </Html>
 
  );
}

export default Todo;