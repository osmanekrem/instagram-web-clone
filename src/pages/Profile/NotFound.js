import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function ProfileNotFound() {
  return (
    <div className='w-full p-10 flex flex-col text-center items-center justify-center'>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
        <h2 className='text-26 text-[22px] font-semibold -mt-1 -mb-[5px]'>
            Sorry, this page isn't available
        </h2>
        <div className='mt-10 mb-5'>
            <div className='-my-1.5 text-26'>
                The link you followed may be broken, or the page may have been removed. 
                <Link className='text-link' to="/"> Go back to Instagram</Link>
            </div>
        </div>
    </div>
  )
}
