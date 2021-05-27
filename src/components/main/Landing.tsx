import LandingComponent from './Landing.style'
export default function Landing() {
  return (
    <LandingComponent id='first'>
      <div style={{ width: '100%', height: '100%' }}>
        <video className='video' muted autoPlay>
          <source src='coffee2_VP9.webm' />
        </video>
      </div>
    </LandingComponent>
  )
}
