import { Icon } from '@iconify/react';
import {NavLink} from "react-router-dom";
const Header = () => {
  return(
      <header className="bg-white flex items-center justify-between sticky z-10 top-0 left-0 right-0 shadow-lg drop-shadow-lg px-4 py-3">
          <NavLink to="/" className="text-3xl">
              TODO
          </NavLink>
          <div className="flex items-center justify-end">
              <a href="https://localtodo.vercel.app" target="_blank" rel="noreferrer" className="mr-4 flex items-center flex-col">
                  <Icon width={30} icon="akar-icons:github-fill" />
                  <span>Github</span>
              </a>
              <a href="https://prafullaranjan.com/contact" target="_blank" rel="noreferrer" className="flex items-center flex-col">
                  <Icon width={30} icon="fontisto:email" />
                  <span>Message</span>
              </a>
          </div>
      </header>
  )
}
export default Header;