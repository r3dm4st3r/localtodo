import {Icon} from "@iconify/react/dist/iconify";

const ShowTodoBox = (props) => {
    const {list, listIndex, listID, handleCheckBox, removeTodoItem} = props;
    return(
        <ul className="px-3 py-1 mb-2">
            {list?.todo?.map((item, index) => {
                return (
                    <li key={index} className={`group flex items-center justify-between mb-2 last:mb-0 py-2 bg-gradient-to-r hover:from-transparent hover:to-yellow-100 ${item?.completed ? 'text-gray-300 line-through' : ''} `}>
                        <div className="inline-flex items-center w-[90%]">
                            <input id={item.id}
                                   type="checkbox"
                                   checked={item?.completed}
                                   onChange={(e) => handleCheckBox(listID, item.id, e)}
                                   className="form-checkbox cursor-pointer" />
                            <label htmlFor={item.id}
                                   className="form-checkbox-label cursor-pointer">
                                {item?.todo}
                            </label>
                        </div>
                        <div className="flex items-center">
                            <button onClick={()=> removeTodoItem(listIndex, listID, item.id)} className="scale-0 transition-transform pr-3 group-hover:scale-100"><Icon icon="ep:delete" /></button>
                        </div>
                    </li>
                )
            }).reverse()}
        </ul>
    )
}
export default ShowTodoBox;