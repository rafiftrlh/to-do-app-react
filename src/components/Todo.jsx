import todo from "../assets/todo.svg"
import TodoItems from "./TodoItems"

const Todo = () => {
  return (
    <div className="bg-neutral-100 place-self-center w-11/12 max-w-md flex flex-col p-7 h-[90vh] rounded-xl">
      {/* Title */}
      <div className="flex items-center gap-2">
        <div className="border-2 border-green-500 p-2 rounded-xl">
          <img className="w-8" src={todo} alt="" />
        </div>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* input box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add your task" />
        <button className="border-none rounded-full bg-blue-600 w-32 h-14 text-white font-medium cursor-pointer hover:bg-blue-500">Add +</button>
      </div>

      {/* to-do list */}
      <div className="h-full border-2 rounded-2xl p-2 flex flex-col overflow-auto divide-y-2 divide-dashed">
        <TodoItems task="Learn Coding" />
        <TodoItems task="Workout" />
      </div>
    </div>
  )
}

export default Todo