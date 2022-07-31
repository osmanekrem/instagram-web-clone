import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'


export default function Messages({messages}) {
  return (
    <ScrollToBottom className='h-[calc(100%-144px)] p-5 pb-0 flex flex-col messages-box'> 
        {messages.map((message, key) => <Message message={message} key={key}/>)}
    </ScrollToBottom>
  )

}
