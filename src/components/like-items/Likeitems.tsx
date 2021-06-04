import CoffeeMap from 'components/coffee-map/CoffeeMap'
import CoffeeItem from 'containers/item/CoffeeItem'
import ProductItem from 'containers/item/ProductItem'
import { itemResult } from 'interface'
import React, { useState } from 'react'
import { LikeitemsContainer } from './Likeitems.style'
// import Result from 'containers/result/Result'

type Items = {
  Items: itemResult[]
}

const initdata: itemResult = {
  id: 0,
  itemName: 'Coffee example',
  itemPrice: 0,
  itemDetail: {
    title: '',
    content: [],
  },
  type: 'product',
  imageURL:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/600px-Flag_of_Kenya.svg.png',
  iso: '',
  isLiked: false,
  tag: [{ id: 0, tagName: '' }],
}

export default function Likeitems({ Items }: Items) {
  const [SelectedItem, setSelectedItem] = useState<itemResult>(initdata)
  const [handlechecked, sethandlechecked] = useState(false)
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: itemResult) => {
    e.preventDefault()
    console.log(item)
    setSelectedItem(item)
    sethandlechecked(!handlechecked)
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
                <img src={el.imageURL} alt='' />
              </div>
            )
          }
        })
      ) : (
        <div className='empty'>좋아요한 정보가 없습니다</div>
      )}
      {handlechecked && SelectedItem.type === 'coffee' && (
        <CoffeeItem
          CoffeeData={SelectedItem}
          handlechecked={() => sethandlechecked(!handlechecked)}
        />
      )}
      {handlechecked && SelectedItem.type === 'product' && (
        <ProductItem
          selectedItem={SelectedItem}
          handlechecked={() => sethandlechecked(!handlechecked)}
        />
      )}
    </LikeitemsContainer>
  )
}
