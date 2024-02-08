import { useState } from "react"
import Input from "../Components/Input"
import Button from "../Components/Button"

function TodosPage() {

  const [todo, setTodo] = useState([])


  return (
    <div>
      <form>
        <Input />
        <Button />
      </form>
    </div>
  )
}

export default TodosPage