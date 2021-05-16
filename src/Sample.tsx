export default function Sample() {
  return (
    <div>
      <div style={{ width: '100%', height: '100%' }}>
        <video className='video' muted autoPlay>
          <source src='coffee1_VP9.webm' />
        </video>
        <video className='video' muted autoPlay>
          <source src='coffee2_VP9.webm' />
        </video>
      </div>
    </div>
  )
}
