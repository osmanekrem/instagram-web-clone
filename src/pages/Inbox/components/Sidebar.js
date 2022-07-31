import Icon from 'components/Icon'
import React from 'react'
import { useSelector } from 'react-redux'
import ChatList from './ChatList'

export default function Sidebar() {
    const user = useSelector(state => state.auth.user)
  return user && (
    <aside className='border-r border-db bg-white w-[350px] h-full shrink-0'>
        <header className='h-[60px] w-full bg-white border-b border-db pr-5 pl-[52px] flex items-center text-26'>
            <div className='w-full flex items-center justify-center text-26 '>
                <button className='flex items-center justify-center w-full'>
                    <div className='text-26 font-semibold'>
                        {user.username}
                    </div>
                    <span className='p-2 flex items-center justify-center'>
                        <Icon className="rotate-180" name="chevron-down" size={20} />
                    </span>
                </button>
                <span className='ml-4'>
                <Icon name="new-message" size={24} />
                </span>
            </div>

        </header>
        <ChatList />
    </aside>
  )
}
