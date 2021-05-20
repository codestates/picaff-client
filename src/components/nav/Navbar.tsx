import { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { NavComponent } from './Navbar.style'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from 'components/button/Button'
import Logo from './logo.png'

export default function Navbar() {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <Router>
      <NavComponent isActive={isActive} className='navbar'>
        <Link to='/'>
          <img className='navbar_logo' src={Logo} />
        </Link>
        <ul className='navbar_menu'>
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
        <ul className='navbar_user'>
          {/* 유저버튼은 페이지당 필요한 개수만큼 link 및 value 지정해서 사용 */}
          <Link to=''>
            <Button style='UserBtn' type='button' value='' />
          </Link>
          <Link to=''>
            <Button style='UserBtn' type='button' value='' />
          </Link>
        </ul>
        <button className='navbar_toggleBtn' onClick={() => setIsActive(!isActive)}>
          <GiHamburgerMenu />
        </button>
      </NavComponent>
    </Router>
  )
}
