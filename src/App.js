import { useState } from "react";
import "./App.css";
import TodoLists from "./component/TodoLists/TodoLists";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addClickHandler() {
    console.log(inputValue);
    console.log(todoList);

    setTodoList([...todoList, { id: Date.now(), todo: inputValue }]);
    setInputValue("");
  }

  function enterAdd(event) {
    if (event.keyCode === 13) {
      addClickHandler();
    }
  }

  return (
    <>
      <section className=" my-[25px] mx-[auto] p-[10px] w-[95%] h-[auto] rounded-md bg-[#9370DB]">
        <header className=" text-[#424242] text-center my-[15px] mx-[auto] font-bold text-[20px] xl:text-[22px]">
          -- TODO LISTS --
        </header>
        <div className="flex items-center justify-between">
          <input
            className=" my-[5px] rounded-l-md py-[10px] px-[5px]  w-[100%] outline-none"
            type="text"
            placeholder="ToDo"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={enterAdd}
          />

          <button
            className="bg-[#bda1f7] py-[10px] px-[15px] rounded-r-md"
            onClick={addClickHandler}
          >
            add
          </button>
        </div>
        <hr className="my-[10px] border border-white" />

        {todoList.map((todo, todoList, setTodoList) => {
          return (
            <TodoLists
              todo={todo.todo}
              key={todo.id}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
