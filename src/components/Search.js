import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Icon from "./Icon";
import classNames from "classnames";


export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[268px] text-8e relative group">
        <span className={classNames({
          "absolute top-0 left-4 h-9 flex pointer-events-none items-center justify-center" : true,
          "hidden" : open,
        })}>
          <Icon name="search" />
        </span>
        <input onBlur={() => setOpen(false)} onFocus={() => setOpen(true)} type="text" placeholder="Search" className="h-9 w-full bg-ef pr-4 pl-11 focus:pl-4 focus:pr-11 outline-none rounded-lg" />
        <span onClick={() => setOpen(false)} className={classNames({
          "absolute top-0 right-4 text-c7 h-9 flex cursor-pointer items-center justify-center" : true,
          "hidden" : !open,
        })}>
          <AiFillCloseCircle size={16} />
        </span>

    </div>
  )
}
