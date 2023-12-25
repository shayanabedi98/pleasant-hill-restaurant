import React from 'react'

const Navbar = ({ onClick }) => {

  return (
    <div className='navbar'>
        <ul>
            <li onClick={() => onClick('home')} >Home</li>
            <li onClick={() => onClick('menu')} >Menu</li>
            <li onClick={() => onClick('contact')} >Contact</li>
        </ul>
    </div>
  )
}

export default Navbar