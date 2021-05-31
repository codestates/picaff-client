import { useState } from 'react'
import { itemResult, ProductResultType } from 'interface'
import { ProductItemContainer } from './ProductItem.style'
import ShareAndLike from 'components/share-and-like/ShareAndLike'
import ProductRadarChart from 'components/radar-chart/ProductRadarChart'
import { AiFillCloseCircle } from 'react-icons/ai'
type Props = {
  selectedItem: itemResult
  handlechecked: () => void
}

export default function ProductItem({ selectedItem, handlechecked }: Props) {
  const [renderItem] = useState<itemResult>(selectedItem)

  const { itemName, itemDetail, imageUrl, productCharacter } = selectedItem

  const radarInfo: ProductResultType | undefined = productCharacter && {
    productName: itemName,
    productCharacter: {
      id: productCharacter.id,
      accessibility: productCharacter.accessibility,
      convenience: productCharacter.convenience,
      effectiveness: productCharacter.effectiveness,
    },
  }

  return (
    <ProductItemContainer>
      <div className='closebtn'>
        <button className='close' onClick={handlechecked}>
          <AiFillCloseCircle />
        </button>
      </div>
      <div className='top_container'>
        <div className='back1' />
        <section className='section_top'>
          <div className='section_top_photo'>
            <img src={imageUrl} alt=''></img>
            <div className='title'>{itemName}</div>
          </div>
          <div className='section_top_chart'>
            {radarInfo && <ProductRadarChart radarInfo={radarInfo} />}
            <span className='title'>Radar Chart : {itemName}</span>
          </div>
        </section>
        <section className='section_bottom'>
          <div className='section_bottom_left'>
            <div className='title'>섬세하고 깊은 커피맛을 느끼고 싶다면 핸드드립</div>
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
    </ProductItemContainer>
  )
}
