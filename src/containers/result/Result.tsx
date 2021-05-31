import { ResultContainer } from './Result.style'
import { useState } from 'react'
import { TestResult } from 'interface'
import CoffeeResult from './CoffeeResult'
import ProductResult from './ProductResult'
import { IoIosPaperPlane } from 'react-icons/io'
import { useLocation } from 'react-router'

export default function Result() {
  const location = useLocation<TestResult>()
  const TestResult = location.state
  const { coffeeResult, productResult }: TestResult = TestResult
  const [isTabActive, setIsTabActive] = useState<boolean>(true)

  return (
    <ResultContainer isTabActive={isTabActive}>
      <div className='top_container'>
        <div className='content'>
          <div className='section_btn'>
            <button className='coffee' onClick={() => setIsTabActive(true)}>
              Coffee
            </button>
            <button className='product' onClick={() => setIsTabActive(false)}>
              Product
            </button>
          </div>
          {isTabActive ? (
            <CoffeeResult data={coffeeResult} />
          ) : (
            <ProductResult data={productResult} />
          )}
        </div>
      </div>
      <div className='section_share'>
        <button className='btn_share'>
          <IoIosPaperPlane />
        </button>
      </div>
    </ResultContainer>
  )
}
