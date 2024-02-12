import { useState } from "react"
import Input from "../Components/Input"
import Button from "../Components/Button"

function TodosPage() {

  const [todo, setTodo] = useState([])
  
  const [newtodo, setnewTodo] = useState({
    titulo:"",
    id:"",
    checked:false,
  })

  const [inputEstado, setinputEstado]= useState("")

  function handleChange(event){
    setinputEstado(event.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    
    setnewTodo((oldtoDo) => {
      return {
        titulo:inputEstado,
        id:Math.round(Math.random * 100000), 
        checked:false,
      }
      
    })
    setTodo([...todo, newtodo])
    setinputEstado("")
    alert("Usuario agregado")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input handleChange={handleChange} value={inputEstado} placeholder={"Escribe aqui..."}/>
        <Button />
      </form>
    </div>
  )
}

export default TodosPage