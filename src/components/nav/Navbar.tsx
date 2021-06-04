import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavComponent } from './Navbar.style'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from 'components/button/Button'
import { useAuth } from 'containers/ProvideAuth/ProvideAuth'
export default function Navbar() {
  const [isActive, setIsActive] = useState<boolean>(false)
  const auth = useAuth()

  return (
    <NavComponent isActive={isActive} className='navbar'>
      <Link to='/'>
        <img className='navbar_logo' src='./images/logo.png' />
      </Link>
      <ul className='navbar_menu'>
        <Link to='/' id='home'>
          <Button style='MenuBtn' type='button' value='HOME' />
        </Link>
        <Link to='/test' id='test'>
          <Button style='MenuBtn' type='button' value='RECOMMEND' />
        </Link>
        <Link to='/magazine' id='magazine'>
          <Button style='MenuBtn' type='button' value='RECIPE' />
        </Link>
      </ul>
      <ul className='navbar_user'>
        {!auth.accessToken ? (
          <>
            <Link to='/login'>
              <Button style='UserBtn' type='button' value='로그인' />
            </Link>
            <Link to='/signup'>
              <Button style='UserBtn' type='button' value='회원가입' />
            </Link>
          </>
        ) : (
          <>
            <Link to='/mypage'>
              <Button style='UserBtn' type='button' value='mypage' />
            </Link>
          </>
        )}
      </ul>

      <button className='navbar_toggleBtn' onClick={() => setIsActive(!isActive)}>
        <GiHamburgerMenu />
      </button>
    </NavComponent>
  )
}
