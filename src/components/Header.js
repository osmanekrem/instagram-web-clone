import classNames from "classnames";
import { logout } from "firebase.js";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";
import Search from "./Search";

export default function Header() {

  const user = useSelector(state => state.auth.user);

  return (
    <header className="bg-white border-b border-d8 flex items-center justify-center w-full">
        <div className="h-[59px] flex items-center justify-between w-full container px-5">
            <Link className="w-[calc((100%-268px)/2)] flex justify-start" to="/">
                <img className=" mt-[7px] h-[30px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram"/>
            </Link>
            <Search />
            <div className="w-[calc((100%-268px)/2)] flex justify-end items-center">
              <nav className="flex items-center pl-6 gap-x-[22px] text-26" >
                <NavLink to="/">
                  {({isActive}) => <Icon name={isActive ? "home-filled" : "home"} size={24} />}
                </NavLink>
                <NavLink to="/inbox">
                  {({isActive}) => <Icon name={isActive ? "messenger-filled" : "messenger"} size={24} />}
                </NavLink>
                <NavLink to="/">
                  <Icon name="new" size={24} />
                </NavLink>
                <NavLink to="/">
                  <Icon name="explore" size={24} />
                </NavLink>
                <NavLink to="/">
                  <Icon name="hearth" size={24} />
                </NavLink>
                <NavLink to={`/${user.username}`}>
                  {({isActive}) => <img src="../no-avatar.jpg" className={classNames({
                    "bg-zinc-50 h-6 w-6 rounded-full flex items-center justify-center overflow-hidden": true,
                    "ring-1 ring-offset-1 ring-26": isActive,
                  })} alt="logo" />}
                </NavLink>
              </nav>
            </div >
        </div>
        
    </header>
  )
}
