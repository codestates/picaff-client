import { LoadingComponent } from './Loading.style'

export default function LoadingIndicator() {
  return (
    <LoadingComponent id='loading'>
      <div className='message'>데이터 로딩중</div>
      <div className='loading'></div>
    </LoadingComponent>
  )
}
