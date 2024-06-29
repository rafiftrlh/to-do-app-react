import tick from "../assets/tick.svg"
import not_tick from "../assets/not_tick.svg"
import trash from "../assets/trash.svg"

const TodoItems = ({ task }) => {
  return (
    <div className="flex items-center py-2 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img className="w-7" src={tick} alt="" />
        <p className="text-slate-700 ml-4 text-[17px]">{task}</p>
      </div>

      <img className="w-5 cursor-pointer" src={trash} alt="" />
    </div>
  )
}

export default TodoItems