import CoffeeMap from 'components/coffee-map/CoffeeMap'
import Result from 'containers/result/Result'
import { TestResult } from 'interface'
import React from 'react'
import { TestResultListContainer } from './TestResultList.style'

type Props = {
  testResult: TestResult[]
}

export default function TestResultList({ testResult }: Props) {
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: TestResult
  ): JSX.Element => {
    e.preventDefault()
    return <Result TestResult={data} />
  }
  return (
    <TestResultListContainer>
      {testResult.length !== 0 ? (
        testResult.map((el) => (
          <div className='itemContainer' onClick={(e) => handleClick(e, el)}>
            <div className='image'>
              <img alt='' src={el.productResult.imageUrl} />
            </div>
            <div className='image'>
              <CoffeeMap type={el.coffeeResult.iso || 'All'} />
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
