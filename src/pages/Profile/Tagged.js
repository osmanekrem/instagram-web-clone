import Icon from 'components/Icon'
import React from 'react'

export default function Tagged() {
  return (
    <div className="w-full flex justify-center items-start">
        <div className='my-[60px] mx-11 max-w-[350px] flex items-center justify-center flex-col'>
            <span className='w-[62px] h-[62px] border-2 rounded-full border-26 flex items-center justify-center'>
                <Icon name="tag" size={34} />
            </span>
            <div className='my-6'>
                <h1 className='-mb-1.5 -mt-[5px] text-26 text-[28px] font-light'>
                    No Photos
                </h1>
            </div>
        </div>
    </div>
  )
}
