import { useState } from "react";
import Button from "./components/Button";


function App() {

  type Task = {
    id: number;
    text: string;
    completed: boolean;
  }

    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState("");


    const handleAddClick = () => {
        if (inputValue.trim() !== '') {
        const newTask: Task = {
          id: Date.now(),
          text: inputValue,
          completed: false,
        };
        setTasks([...tasks, newTask]);
        setInputValue('');
        console.log("i'm runnign");
      }
    }


    return (
      <div>
        <form>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <ul>
        {
          tasks.map((task: Task) => (
            <li key={task.id}>{task.text}</li>
          ))
        }
        </ul>
        <Button onClick={handleAddClick}>Add</Button>
      </div>
    )
}


export default App;
