import { useEffect, useRef, useState } from "react";
import { useField } from "formik";
import classNames from "classnames";

export default function Input({label, type="text", ...props}) {

    const [field, meta, helpers] = useField(props)
    const [show, setShow] = useState(false);
    const [InputType, setType] = useState(type);

    useEffect(() => {
        if(show){
            setType("text");
        } else {
            setType(type);
        }
    }, [show]);

    return (
        <label className="flex relative h-9 mb-1.5 bg-zinc-50 border border-db rounded-[3px] focus-within:border-a8">
            <input type={InputType} className={classNames({
                "pl-2 pt-[9px] pb-[7px] bg-transparent flex items-center  text-26 outline-none  transition-all w-full" : true,
                "pb-[2px] pt-[14px] text-xs" : field.value,
                "text-base" : !field.value,
                })} {...field} {...props}/>
            <small className={classNames({
                "absolute  left-2 cursor-text pointer-events-none -translate-y-1/2 text-8e transition-all " : true,
                "text-[10px] top-2.5" : field.value,
                "top-1/2 text-xs" : !field.value,
            })} >{label}</small>
            {type === "password" && field.value && (
                <div onClick={() => setShow(show => !show)} className="cursor-pointer select-none pr-2 ml-2 text-sm font-semibold text-26 h-full flex items-center">
                    {show ? "Hide" : "Show"}
                </div>
            )}
        </label>
    )
}
