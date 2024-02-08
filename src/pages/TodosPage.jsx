import { useState } from "react"
import Input from "../Components/Input"
import Button from "../Components/Button"

function TodosPage() {

  const [todo, setTodo] = useState([])
  function handleChange(event){
    console.log(event)
  }

  return (
    <div>
      <form>
        <Input handleChange={handleChange}/>
        <Button />
      </form>
    </div>
  )
}

export default TodosPage