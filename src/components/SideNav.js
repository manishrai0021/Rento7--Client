import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='fixed w-full bottom-0 flex justify-around p-4 bg-slate-100 '>
        <Link to="/" >🏠</Link>
        <Link to="/followers" >🫂</Link>
        <Link to="/search" >🔍</Link>
        <Link to="/upload" >➕</Link>
        <Link to="/market" >💹</Link>
        <Link to="/messages" >✉️</Link>
        <Link to="/profile" >🧑</Link>
    </div>
  )
}

export default SideNav