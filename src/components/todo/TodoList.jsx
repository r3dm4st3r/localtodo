import useApp from "../../hooks/useApp";
import {lazy, Suspense, useEffect, useState} from "react";
import {Icon} from "@iconify/react/dist/iconify";
import {weekDays} from "../../helpers/weekDays";
import {randomID} from "../../helpers/randomID";
import NothingHere from "../common/NothingHere";

const CreateTodoBox = lazy(() => import("./CreateTodoBox"))
const ShowTodoBox = lazy(() => import("./ShowTodoBox"))

const TodoList = () => {
    const {app, setApp} = useApp();
    const [selectedTodo, setSelectedTodo] = useState('' || []);
    const date = new Date();
    const todayDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const localTodo = JSON.parse(localStorage.getItem('localTodo'))
    const isLocal = JSON.parse(localStorage.getItem('isLocal'))
    const [dayFilter, setDayFilter] = useState(date.getDay());
    const [removeList, setRemoveList] = useState(null);
    const dayFilterData = app?.todoList?.filter((item) => item.created.day === dayFilter);

    const currToDo = [
        {
            id: randomID(),
            todo: app?.todo,
            label: {
                type: '',
                name: ''
            },
            created: {
                day: date.getDay(),
                date: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
                time: date.toTimeString().substring(0, 8),
                fullDate: todayDate
            },
            isDone: false,
        }
    ];

    const handleCheckBox = (listID, itemCheckId, e) => {

        const listTodoIndex = app?.todoList.findIndex((item) => item.id === listID)
        const checkedItemIndex = app?.todoList[listTodoIndex].todo?.findIndex((item) => item.id === itemCheckId)

        if (selectedTodo.includes(itemCheckId)) {
            const filterValue = selectedTodo.filter((item) => item.id !== itemCheckId)
            setSelectedTodo(filterValue);
        } else {
            setSelectedTodo([...selectedTodo, itemCheckId]);
        }


        app.todoList[listTodoIndex].todo[checkedItemIndex].completed = e.target.checked;
        app.todoList[listTodoIndex].isDone = app.todoList[listTodoIndex].todo.every((item)=> item.completed);
    };
    const removeTodoItem = (listIndex, listID, itemId) => {
        const listTodoIndex = app?.todoList.findIndex((item) => item.id === listID)
        const updatedItem = app?.todoList;
        app.todoList[listTodoIndex].todo = app?.todoList[listTodoIndex]?.todo?.filter((item) => item.id !== itemId);
        if (app.todoList[listTodoIndex].todo.length === 0) {
            console.log('now length is zero');
            setRemoveList(listIndex)
        }
        setApp((prev) => {
            return {
                ...prev,
                todoList: updatedItem
            }
        })
        localStorage.setItem('localTodo', JSON.stringify(updatedItem));
    };

    const removeTodoList = (type, listIndex) => {
        if (type === "removeCard") {
            const updatedList = app?.todoList?.filter((item, todoIndex) => todoIndex !== listIndex);
            setApp((prev)=> {
                return {
                    ...prev,
                    todoList: updatedList
                }
            });
        } else  {
            const updatedList = app?.todoList?.filter((item, todoIndex) => todoIndex !== removeList);
            setApp((prev)=> {
                return {
                    ...prev,
                    todoList: updatedList
                }
            });
        }
    }

    const addLabel = () => {
        console.log('set label')
    }
    const saveTodo = () => {
        localStorage.setItem('isLocal', 'true');
        const pushTodo = [...app?.todoList, ...currToDo]
        setApp((prev) => {
            return {
                ...prev,
                todoList: pushTodo,
                todo: []
            }
        });
        localStorage.setItem('localTodo', JSON.stringify(pushTodo));
    };

    const filterByDay = (dayIndex) => {
        setDayFilter(dayIndex);
        const weekDaysEl = document.querySelectorAll('.weekdays');
        weekDaysEl.forEach((item, index) => {
            if (index+1 === dayIndex) {
                item.children[0].classList.add('bg-orange-100')
            } else  {
                item.children[0].classList.remove('bg-orange-100')
            }
        })
    }

    useEffect(() => {
        localStorage.setItem('localTodo', JSON.stringify(app?.todoList));
    }, [app?.todoList, selectedTodo])
    useEffect(() => {
        if (isLocal) {
            setApp((prev) => {
                return {
                    ...prev,
                    todoList: localTodo,
                    todo: []
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLocal]);
    useEffect(() => {
        // dependency issue
        if (removeList === 0) {
            removeTodoList();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [removeList])


    return(
        <>
            <section className="py-5">
                <div className="container">
                    <Suspense fallback={''}>
                        <CreateTodoBox todo={app?.todo}
                                       handleCheckBox={handleCheckBox}
                                       removeTodoItem={removeTodoItem}
                                       addLabel={addLabel}
                                       saveTodo={saveTodo}
                        />
                    </Suspense>
                </div>
            </section>

            <section className="py-10">
                <div className="container">
                    <div className="grid grid-cols-7 mb-10">
                        {app?.todoList?.length > 0 && weekDays?.map((item, dayIndex) => {
                            return <div onClick={(e) => filterByDay(dayIndex+1, e)} key={dayIndex} className="mx-1 first:ml-0 last:mr-0 shadow drop-shadow-md flex items-center justify-center rounded-full weekdays">
                                <span className={`p-2 block w-full text-center text-xs sm:text-sm cursor-pointer rounded-full ${date.getDay() === dayIndex+1 ? 'bg-orange-500 text-white' : 'bg-white'}`}>{item.day}</span>
                            </div>
                        })}
                    </div>
                    <div className={`grid ${dayFilterData.length > 0 ? 'sm:grid-cols-2' : 'grid-cols-1'} gap-5`}>
                        {dayFilterData.length > 0 ? (
                            dayFilterData?.map((list, listIndex) => {
                                return(
                                    <div className="bg-white shadow-md drop-shadow-md last:mb-0" key={listIndex}>
                                        <div className="bg-theme/5 mb-2 px-3 py-2 flex items-center justify-between">
                                            <div className="flex items-center w-full">
                                                <div className="flex items-center w-full">
                                                    <h5 className="mr-3">Tasks</h5>
                                                    {list?.isDone &&
                                                        <span className="inline-block text-green-500">
                                                        <Icon icon="heroicons-solid:badge-check" />
                                                    </span>
                                                    }
                                                </div>
                                                <div className="flex items-center justify-end w-full">
                                                    <div title="Remove this card" className="cursor-pointer" onClick={() => removeTodoList('removeCard' , listIndex)}>
                                                        <Icon width={25} icon="material-symbols:clear-all" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ShowTodoBox list={list}
                                                     listIndex={listIndex}
                                                     listID={list.id}
                                                     handleCheckBox={handleCheckBox}
                                                     removeTodoItem={removeTodoItem}
                                        />
                                    </div>
                                )
                            }).reverse()
                        ) : (
                            <NothingHere />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TodoList;