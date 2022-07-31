import Icon from 'components/Icon'
import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

export default function Reply() {

    const [message, setMessage] = useState('')

    const sendMessage = e => {
        e.preventDefault();
    }

  return (
    <footer className='h-[84px] flex items-center justify-center p-5 w-full'>
        <form onSubmit={sendMessage} className='min-h-[44px] flex items-center shrink-0 w-full rounded-[22px] border border-db pl-[11px] pr-2'>
            <button type='button' className='h-[42px] w-10 p-2 flex items-center justify-center text-26'>
                <Icon name="emoji" size={24} />
            </button>
            <TextareaAutosize maxRows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message...' className='min-h-[34px] outline-0 border-none placeholder:text-[#606770] focus:placeholder:text-[#bec3d3] mr-1 flex-1 overflow-hidden resize-none py-2 px-[9px] text-26 text-sm bg-transparent' />

            {message 
                ? <button type='submit' className='mr-2 h-[42px] text-link-light text-sm font-semibold'>
                    Send
                </button> 
                : <>
                <button type='button' className='h-[42px] w-10 p-2 flex items-center justify-center text-26'>
                    <Icon name="picture" size={24} />
                </button>
                <button type='button' className='h-[42px] w-10 p-2 flex items-center justify-center text-26'>
                    <Icon name="hearth" size={24} />
                </button>
            </>}
        </form>
    </footer>
  )
}
