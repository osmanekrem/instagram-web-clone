import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Message({message}) {
    const user = useSelector(state => state.auth.user)
  return user && (
    <div className={classNames({
        "flex items-end mb-2 max-w-[236px]": true,
        "self-end": message.from.id === user.uid,
    })}>
        {(message.from.id !== user.uid) && <img src={message.from.avatar} className="w-6 h-6 rounded-full mr-2" alt={message.from.name}/>}
        <div 
            style={{hyphens: "auto"}} 
            className={classNames({
                "min-h-[44px] rounded-3xl border-ef leading-[18px] border flex flex-col p-4 text-sm text-26 justify-center items-start":true,
                "bg-ef": message.from.id === user.uid,
            })}
        >
            <div className='-mt-[3px] -mb-1'>{message.message}</div>
        </div>
    </div>
  )
}
