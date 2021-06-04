import CoffeeMap from 'components/coffee-map/CoffeeMap'
import { TestResult } from 'interface'
import React from 'react'
import { useHistory } from 'react-router'
import { TestResultListContainer } from './TestResultList.style'

type Props = {
  testResult: TestResult[]
}

export default function TestResultList({ testResult }: Props) {
  const history = useHistory()
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: TestResult) => {
    e.preventDefault()
    history.push('/result', data)
  }
  return (
    <TestResultListContainer>
      {testResult.length !== 0 ? (
        testResult.map((el) => (
          <div className='itemContainer' onClick={(e) => handleClick(e, el)}>
            <div className='image'>
              <img alt='' src={el.productResult.imageURL} />
            </div>
            <div className='image'>
              <CoffeeMap type={el.coffeeResult.iso || 'All'} coffee={el.coffeeResult} />
            </div>
          </div>
        ))
      ) : (
        <div>
          <span>테스트를 진행해 주세요</span>
        </div>
      )}
    </TestResultListContainer>
  )
}
