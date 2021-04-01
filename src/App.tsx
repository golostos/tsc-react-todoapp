import React, { useState } from 'react';
import './App.css';
import TodoList, {Task} from './components/TodoList';

let initState = [{
  text: 'Task 1',
  completed: false
}, {
  text: 'Task 2',
  completed: true
}]

function App() {
  const [input, setInput] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>([])

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log('Submit')
    setTasks([...tasks, {text: input, completed: false}])
    setInput('')
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input value={input} onChange={inputHandler} type="text"/>
        <button type="submit">Add task</button>
      </form>
      <TodoList tasks={tasks} />
    </>
  );
}

export default App;

// type GreetCapFunction = (a: string) => string[];

// const someCallback: GreetCapFunction = function (str: string) {
//   return str.split('')
// }

// class NameClass extends Object {
//   constructor() {
//     super()
//   }
//   public someMethod1 (callback: GreetCapFunction): Array<string> {
//     return callback('Hello')
//   }
// }

// const someObj: NameClass = new NameClass()
// someObj.someMethod1(someCallback)


