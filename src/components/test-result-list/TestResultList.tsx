import CoffeeMap from 'components/coffee-map/CoffeeMap'
import { TestResult } from 'interface'
import { TestResultListContainer } from './TestResultList'

export default function TestResultList({ testResult }: TestResult[]) {
  return (
    <TestResultListContainer>
      <h2>내 커피 취향</h2>
      <div className='slider'>
        {testResult.map((el) => (
          <div className='slide'>
            <img src={el.imageUrl} />
            <CoffeeMap type={el.iso} />
          </div>
        ))}
      </div>
    </TestResultListContainer>
  )
}
