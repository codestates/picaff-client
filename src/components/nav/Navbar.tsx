// import React, { useRef } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { NavComponent } from './Navbar.style'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import Button from 'components/button/Button'
import Logo from './logo.png'
import handleToggle from './Toggle'

export default function Navbar() {
  // const toggleBtn = useRef<HTMLButtonElement>()
  // const menu = useRef<HTMLUListElement>()
  // const user = useRef<HTMLUListElement>()

  // toggleBtn.current.addEventListener('click', () => {
  //   menu.current.classList.toggle('active')
  //   user.current.classList.toggle('active')
  // })

  const handleClick = () => {
    handleToggle()
  }

  return (
    <Router>
      <NavComponent className='navbar'>
        <img className='navbar_logo' src={Logo} />
        <ul className='navbar_menu' /*ref={menu}*/>
          <Link to='/' id='home'>
            <Button style='MenuBtn' type='button' value='HOME' />
          </Link>
          <Link to='/test' id='test'>
            <Button style='MenuBtn' type='button' value='PICAFF TEST' />
          </Link>
          <Link to='/magazin' id='magazine'>
            <Button style='MenuBtn' type='button' value='PICAFF MAGAZINE' />
          </Link>
        </ul>
        <ul className='navbar_user' /*ref={user}*/>
          <Link to=''>
            <Button style='UserBtn' type='button' value='Login' />
          </Link>
          <Link to=''>
            <Button style='UserBtn' type='button' value='Sign-up' />
          </Link>
        </ul>
        <button className='navbar_toggleBtn' onClick={handleClick} /*ref={toggleBtn}*/>
          <IoMdArrowDropdownCircle />
        </button>
      </NavComponent>
    </Router>
  )
}
