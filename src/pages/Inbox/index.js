import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

export default function InboxLayout() {
  return (
    <div className='container mx-auto h-[calc(100%-60px)] w-full p-5 pt-[14px]'>
        <Helmet>
            <title>DM</title>
        </Helmet>
        <div className='h-full w-full bg-white border border-db rounded flex'>
            <Sidebar />
            <Outlet /> 
        </div>
    </div>
  )
}
