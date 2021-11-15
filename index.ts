import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  
  logTodo(id, title, completed);

}) ;

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The id of this todo item is ${id}
  The title is ${title}
  Is it completed? ${completed}
  `)
};



// Array
let colors: string[] = ['red', "blue", "green"];

// Classes
class Car {

};
let car: Car = new Car();

// Object Literals

let point: {x: number; y: number} = {
  x: 10,
  y: 5
}


// Function
// we want to tell typescript what arguments the function will take and what it will return
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

//" (i:number) => void" is the annotation, it is telling typescript that it will receive a number i as an argument
// and return nothing, so use the keyword "void"



// ts-node index.ts
// this command combines "tsc index.ts" & "node index.js"