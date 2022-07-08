import {Outlet} from "react-router-dom";
import Header from "../components/common/Header";
const Master = () => {
  return(
      <>
          <Header />
          <main role="main">
              <Outlet />
          </main>
      </>
  )
}

export default Master;