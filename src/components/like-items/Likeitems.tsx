import CoffeeMap from 'components/coffee-map/CoffeeMap'
import { itemResult } from 'interface'
import React from 'react'
import { LikeitemsContainer } from './Likeitems.style'
// import Result from 'containers/result/Result'

type Items = {
  Items: itemResult[]
}

export default function Likeitems({ Items }: Items) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: itemResult) => {
    e.preventDefault()
    console.log(item)
    // return <Item Item={item} />
  }
  return (
    <LikeitemsContainer>
      {Items.length !== 0 ? (
        Items.map((el, idx) => {
          if (el.iso !== '') {
            return (
              <div className='itemContainer' key={idx} onClick={(e) => handleClick(e, el)}>
                <CoffeeMap type={el.iso || 'All'} coffee={el} />
              </div>
            )
          } else {
            return (
              <div className='itemContainer' key={idx} onClick={(e) => handleClick(e, el)}>
                <img src={el.imageUrl} alt='' />
              </div>
            )
          }
        })
      ) : (
        <div>
          <span>테스트를 진행해 주세요</span>
        </div>
      )}
    </LikeitemsContainer>
  )
}
