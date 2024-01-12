import { useState } from 'react'
import Button from './Button'

export type Task = {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  func: (data: Task[]) => void;
}

const TodoList = ({ func }: Props) => {

  

  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");

    func(tasks);

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
    func(tasks);
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
              <Button onClick={handleAddClick}>Add</Button>
    </>
  )
}

export default TodoList
