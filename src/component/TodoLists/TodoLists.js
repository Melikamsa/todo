
function TodoLists({
  todo,
  todoList,
  setTodoList,
  setIsEditMode,
  setInputValue,
}) {
  function deleteClickHandler() {
    setTodoList(todoList.filter((elem) => elem.id !== todo.id));
  }

  function editClickHandler() {
    setIsEditMode({
      status: true,
      id: todo.id,
    });
    setInputValue(todo.todo);
  }

  return (
    <>
      <section className="grid gap-[10px]">
        <div className="my-[5px] rounded-md py-[10px] px-[5px] flex items-center justify-between bg-[#bda1f7]">
          <p className="text-[17px] xl:text-[22px]">{todo.todo}</p>
          <div className="flex gap-[5px]">
            <button
              className="cursor-pointer border-2 border-[#9370DB] p-[5px] rounded-md xl:text-[15px]"
              onClick={deleteClickHandler}
            >
              Delete
            </button>
            <button
              className="cursor-pointer border-2 border-[#9370DB] p-[5px] rounded-md xl:text-[15px]"
              onClick={editClickHandler}
            >
              Edit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TodoLists;