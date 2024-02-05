import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodosPage from "./pages/TodosPage";

function App() {
  return (
    <Routes>
      <Route path="" element={<TodosPage/>}></Route>
    </Routes>
  );
}

export default App;
