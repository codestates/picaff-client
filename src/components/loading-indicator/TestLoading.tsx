import { TestLoadingComponent } from './TestLoading.style'

export default function TestLoadingIndicator() {
  return (
    <TestLoadingComponent id='testLoading'>
      <div className='loading-bar-holder'>
        <div className='loading-bar'>
          <div className='loading-bar-shine'></div>
        </div>
      </div>
    </TestLoadingComponent>
  )
}
