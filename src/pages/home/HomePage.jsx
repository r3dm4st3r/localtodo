import {lazy, Suspense} from "react";

const TodoList = lazy(() => import("../../components/todo/TodoList"))

const HomePage = () => {

  return(
      <>
          <Suspense fallback={''}>
              <TodoList />
          </Suspense>
      </>
  )
}
export default HomePage;