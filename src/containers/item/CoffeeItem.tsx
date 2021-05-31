import { useState } from 'react'
import { CoffeeResultType, itemResult } from 'interface'
import { CoffeeItemContainer } from './CoffeeItem.style'
import ShareAndLike from 'components/share-and-like/ShareAndLike'
import CoffeeRadarChart from 'components/radar-chart/CoffeeRadarChart'
import { AiFillCloseCircle } from 'react-icons/ai'

type Props = {
  selectedItem: itemResult
  handlechecked: () => void
}

export default function CoffeeItem({ selectedItem, handlechecked }: Props) {
  const [renderItem] = useState<itemResult>(selectedItem)
  const { itemName, itemDetail, coffeeCharacter } = selectedItem

  const radarInfo: CoffeeResultType | undefined = coffeeCharacter && {
    coffeeName: itemName,
    coffeeCharacter: {
      id: coffeeCharacter.id,
      sweetness: coffeeCharacter.sweetness,
      sourness: coffeeCharacter.sourness,
      balance: coffeeCharacter.balance,
      body: coffeeCharacter.body,
      aroma: coffeeCharacter.aroma,
      afterTaste: coffeeCharacter.afterTaste,
    },
  }

  return (
    <CoffeeItemContainer>
      <div className='closebtn'>
        <button className='close' onClick={handlechecked}>
          <AiFillCloseCircle />
        </button>
      </div>
      <div className='top_container'>
        <div className='back1' />
        <section className='section_top'>
          <div className='section_top_map'>
            <div className='map'>확대 지도</div>
            <div className='title'>{itemName}</div>
          </div>
          <div className='section_top_chart'>
            {radarInfo && <CoffeeRadarChart radarInfo={radarInfo} />}
            <span className='title'>Radar Chart : {itemName}</span>
          </div>
        </section>
        <section className='section_bottom'>
          <div className='section_bottom_left'>
            <div className='title'>쌈바의 맛을 느낄수 있는 브라질</div>
            <div className='description'>{itemDetail}</div>
          </div>
          <div className='section_bottom_right'>
            <div className='market'>
              <img alt=''></img>
              <div className='box_info'>
                <span>품명</span>
                <span>가격</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ShareAndLike renderItem={renderItem} />
    </CoffeeItemContainer>
  )
}
