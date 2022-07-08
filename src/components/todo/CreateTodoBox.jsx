import { Icon } from '@iconify/react';
import {lazy, Suspense} from "react";

const GetInput = lazy(() => import("./GetInput"))

const CreateTodoBox = (props) => {
    const {todo, saveTodo} = props;
    return(
        <div>

            <div className="grid grid-cols-1">
                <div className="bg-white w-full shadow drop-shadow border-white outline-0 focus:outline-0 text-lg">
                    <Suspense fallback={''}>
                        <GetInput saveTodo={saveTodo} />
                    </Suspense>
                    {todo?.length > 0 &&
                        <>
                            <div className="bg-theme/5 mb-2 px-3 py-2 flex items-center justify-between">
                                <div className="flex items-center">
                                    <h5 className="mr-3">Add Tasks to do</h5>

                                </div>
                                <div className="flex items-center justify-end">
                                    <span className="cursor-pointer" onClick={() => saveTodo()}>
                                        <Icon width={20} icon="ic:baseline-save" />
                                    </span>
                                </div>
                            </div>
                            <ul className="px-3 py-1 mb-2">
                                {todo?.map((item, index) => {
                                    return (
                                        <li key={index} className={`group flex items-center justify-between mb-2 last:mb-0 py-2 bg-gradient-to-r hover:from-transparent hover:to-yellow-100 ${item?.completed ? 'text-gray-300 line-through' : ''} `}>
                                            <div className="inline-flex items-center w-[90%]">
                                                <span className="text-sm">
                                                    {item?.todo}
                                                </span>
                                            </div>
                                        </li>
                                    )
                                }).reverse()}
                            </ul>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
export default CreateTodoBox;