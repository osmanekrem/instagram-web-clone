import Icon from 'components/Icon'
import React from 'react'

export default function Header({user}) {
  return (
    <header className='w-full h-[60px] border-b justify-between border-db flex items-center font-semibold flex-wrap px-5'>
        <div className='text-26 ml-4 text-left mr-auto flex gap-x-3 items-center'>
            <img src={user.avatar || "../no-avatar.jpg"} alt="avatar" className="rounded-full h-6 w-6 bg-zinc-50" />
            <div className='text-sm text-26 font-semibold h-10 flex flex-col gap-y-2 items-start justify-center '>
                <div className='overflow-ellipsis overflow-hidden whitespace-nowrap text-26 text-base font-semibold -my-1.5'>
                    {user.name}
                </div>
                <div className='text-8e text-xs -mt-0.5 -mb-[3px] font-normal'>
                    Şu an aktif
                </div>
            </div>
        </div>
        <button  className="ml-2 p-2">
            <Icon name="info" size={24}/>
        </button>
    </header>
  )
}
