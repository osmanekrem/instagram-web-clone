import classNames from 'classnames'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

export default function ChatList() {

    const {conversationId} = useParams()

    const chats = [
        {
            id: 1,
            user: {
                name: 'John Doe',
                avatar: '../no-avatar.jpg',
            },
            lastMessage: 'Hello',
            lastMessageTime: '12:00',
        },
        {
            id: 2,
            user: {
                name: 'John Doe',
                avatar: '../no-avatar.jpg',
            },
            lastMessage: 'Hello',
            lastMessageTime: '12:00',
            unread: true,
        },
        {
            id: 3,
            user: {
                name: 'John Doe',
                avatar: '../no-avatar.jpg',
            },
            lastMessage: 'Hello',
            lastMessageTime: '12:00',
        }
    ]

  return (
    <div className='h-[calc(100%-60px)]'>
        <header className='flex items-center justify-between py-3 px-5'>
            <h6 className='font-semibold'>Messages</h6>
            <button className='text-link-light text-sm font-semibold'>16 requests</button>
        </header>
        {chats.map(chat => (
            <NavLink 
                className={classNames({
                    "py-2 flex gap-x-3 px-5 hover:bg-zinc-50":true,
                    "font-semibold": chat?.unread,
                    "!bg-ef": +conversationId === chat.id,
                })} 
                key={chat.id} 
                to={`/inbox/${chat.id}`} 
            >
                <img className="rounded-full h-14 w-14" src="../no-avatar.jpg" alt="avatar" />
                <div className='flex flex-col gap-y-2 justify-center'>
                    <div className='text-sm leading-[18px] -mb-1 -mt-[3px] text-26 overflow-ellipsis overflow-hidden whitespace-nowrap w-full mr-auto'><h6>{chat.user.name}</h6></div>
                    <div className={`text-sm ${!chat?.unread && "text-8e"} leading-[18px] -mb-1 -mt-[3px] overflow-ellipsis overflow-hidden whitespace-nowrap w-full mr-auto`}>{chat.lastMessage}</div>
                </div>
            </NavLink>
        ))}
    </div>
  )
}
