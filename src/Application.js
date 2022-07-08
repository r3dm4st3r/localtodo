import React, {lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import Master from "./layouts/Master";

const HomePage = lazy(()=> import('./pages/home/HomePage'));
const TodoList = lazy(()=> import('./components/todo/TodoList'));
const NotFound = lazy(()=> import('./components/common/NotFound'));


const Application = () => {
    return(
        <Routes>
            <Route element={<Master />}>
                <Route index element={<Suspense fallback={''}><HomePage /></Suspense>} />
                <Route path="/app" element={<Suspense fallback={''}><TodoList /></Suspense>} />
                <Route path="*" element={<Suspense fallback={''}><NotFound /></Suspense>} />
            </Route>
        </Routes>
    )
}

export default Application;