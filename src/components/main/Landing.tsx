import LandingComponent from './Landing.style'
import NavBar from 'components/nav/Navbar'

export default function Landing() {
  return (
    <LandingComponent id='first'>
      <NavBar />
      <div style={{ width: '100%', height: '100%' }}>
        <video className='video' muted autoPlay>
          <source src='coffee2_VP9.webm' />
        </video>
      </div>
    </LandingComponent>
  )
}
