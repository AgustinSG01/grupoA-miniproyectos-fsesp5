import { useState } from "react"
import Input from "../Components/Input"
import Button from "../Components/Button"
import ToDo from "../Components/ToDo"

function TodosPage() {

  const [todos, setTodos] = useState([])
  
  

  const [inputEstado, setinputEstado]= useState("")

  function handleChange(event){
    setinputEstado(event.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
   if (inputEstado) {
        setTodos((prevTodos)=>[...prevTodos, {
          
          titulo:inputEstado,
          id:Math.round(Math.random * 100000), 
          checked:false,
        
      }])
      setinputEstado("")
   }else{
    alert("input vacio")
   }
    
    
    
    console.log(todos)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input handleChange={handleChange} value={inputEstado} placeholder={"Escribe aqui..."}/>
        <Button />
      </form>
      <ul>
        {
          todos.map((tarea)=><li key={tarea.id}><ToDo title={tarea.titulo} completed={tarea.checked} id={tarea.id}/></li>)
        }
      </ul>
    </div>
  )
}

export default TodosPage