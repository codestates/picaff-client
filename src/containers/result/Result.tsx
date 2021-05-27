import { ResultContainer } from './Result.style'
import { useState } from 'react'
import { TestResult } from 'interface'
import Navbar from 'components/nav/Navbar'
import CoffeeResult from './CoffeeResult'
import ProductResult from './ProductResult'
// import { IoIosPaperPlane } from 'react-icons/io'
import { data } from './testResult'

export default function Result() {
  const { coffeeResult, productResult }: TestResult = data
  const [isTabActive, setIsTabActive] = useState<boolean>(true)

  return (
    <ResultContainer isTabActive={isTabActive}>
      <Navbar />
      <div className='content'>
        <div className='section_btn'>
          <button className='coffee' onClick={() => setIsTabActive(true)}>
            Coffee
          </button>
          <button className='product' onClick={() => setIsTabActive(false)}>
            Product
          </button>
        </div>
        {/* <button className='share'>
          <IoIosPaperPlane />
        </button> */}
        {isTabActive ? (
          <CoffeeResult data={coffeeResult} />
        ) : (
          <ProductResult data={productResult} />
        )}
      </div>
    </ResultContainer>
  )
}
