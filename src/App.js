import "./App.css";
import About from "./components/About";
import AddToDo from "./components/AddToDo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let initToDo = [];
  //Local Storage
  if (localStorage.getItem("todos") === null) {
    initToDo = [];
  } else {
    initToDo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initToDo);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  let sno;
  if (todos.length === 0) {
    sno = 1;
  } else {
    sno = todos[todos.length - 1].sno + 1;
  }

  const addToDoItem = (title, desc) => {
    const todo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, todo]);
  };

  //Whenever todos changes, add that object to the array in the localstorage.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Router>
        <Header title="ToDo List" searchbar={false} />
        <Routes>
          <Route
            path="/"
            element ={(
              <>
                <AddToDo addToDoItem={addToDoItem} />
                <ToDo todos={todos} onDelete={onDelete} />
              </>)} 
          >
          </Route>
          <Route path="/about" element={(<About/>)}>
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
