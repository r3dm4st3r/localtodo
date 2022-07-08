import {Icon} from "@iconify/react/dist/iconify";
import {useRef, useState} from "react";
import useApp from "../../hooks/useApp";
import {randomID} from "../../helpers/randomID";

const GetInput = () => {
    const {app, setApp} = useApp();
    const [todoInput, setTodoInput] = useState({});
    const userTodoInput = useRef(null);

    const handleUserInput = (e) => {
        e.preventDefault();
        let name = e.target.name,
            value = e.target.value;

        setTodoInput({
            ...todoInput,
            [name]: value,
            id: randomID(),
            completed: false
        })
    };

    const inputTempArray = [];

    const handleUserSubmit = (e) => {
        e.preventDefault();
        inputTempArray.push(todoInput);
        setApp((prev) => {
            return {
                ...prev,
                todo: [
                    ...app?.todo,
                    ...inputTempArray,
                ],
            }
        })
        userTodoInput.current.value = '';
        setTodoInput({});
    };


    return(
        <form onSubmit={(e)=> handleUserSubmit(e)}>
            <div className="input-icon">
                <div className="icon">
                    <Icon width={40} icon="vscode-icons:file-type-todo" />
                </div>
                <input
                    ref={userTodoInput}
                    onChange={(e) => handleUserInput(e)}
                    onSubmit={(e) => handleUserSubmit(e)}
                    name="todo"
                    required={true}
                    value={todoInput?.todo ? todoInput?.todo : ''}
                    type="text" className="form-control"
                    placeholder="Enter task to do..."
                />
            </div>
        </form>
    )
}

export default GetInput;