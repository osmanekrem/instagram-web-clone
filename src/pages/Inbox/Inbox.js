import Button from 'components/Button'
import Icon from 'components/Icon'
import React from 'react'

export default function Inbox() {
  return (
    <div className='flex items-center justify-center h-full w-full text-26'>
        <div className='flex flex-col items-center justify-center gap-y-4'>
            <Icon name="direct-empty" size={96} />
            <h2 className='text-26 text-center text-[22px] font-light'>Your Messages</h2>
            <div className='-mt-[16px] text-sm leading-[18px] -mb-1 text-8e'>Send private photos and messages to a friend or group.</div>
            <span>
                <Button>Send Message</Button>
            </span>
        </div>
    </div>
  )
}
