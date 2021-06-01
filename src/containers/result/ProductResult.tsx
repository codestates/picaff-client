import { ProductResultContainer } from './ProductResult.style'
import { useEffect, useState } from 'react'
import { itemResult, ProductResultType, Tags } from 'interface'
import ProductRadarChart from 'components/radar-chart/ProductRadarChart'
import ProductItem from 'containers/item/ProductItem'
import Tag from 'components/button/Tag'
import Image from 'components/image/Image'
import axios from 'axios'
import { productTempArr } from 'interface/sampledata'

type Props = {
  data: itemResult
}

export default function ProductResult({ data }: Props) {
  const [allItems, setAllItems] = useState<itemResult[]>(productTempArr)
  const [selectedItem, setSelectedItem] = useState<itemResult>(data)
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false)
  // const [selectedTag, setSelectedTag] = useState<number>(0)

  const radarInfo: ProductResultType | undefined = data.productCharacter && {
    productName: data.itemName,
    productCharacter: {
      id: data.productCharacter.id,
      accessibility: data.productCharacter.accessibility,
      convenience: data.productCharacter.convenience,
      effectiveness: data.productCharacter.effectiveness,
    },
  }

  useEffect(() => {
    const getAllItems = async () => {
      const res = await axios.get(`https://localhost:4000/item/all?type=product`, {
        headers: {
          // 'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'withCredentials': true,
        },
      })
      // 받아 온 아이템리스트를 allItems 상태에 넣어줌
      if (res.status === 200) {
        setAllItems(res.data)
      } else if (res.status === 404) {
        console.log('아이템을 받아오지 못했습니다')
      }
    }
    getAllItems()
  }, [])

  return (
    <ProductResultContainer className='section_product'>
      <section className='section_result'>
        <div className='box_image'>
          <img src={data.imageUrl}></img>
        </div>
        <div className='parent_desc'>
          <div className='box_desc'>
            <div className='name'>{data.itemName}</div>
            <div className='text'>
              {data.itemDetail}는 빠르고 간단하며 일반 추출법과 다르게 머신에서 사용 가능한 캡슐을
              넣은 후 버튼만 눌러주면 에스프레소가 추출됩니다. 항상 일정한 품질의 에스프레소 추출이
              가능하며, 캡슐은 원두와 다르게 상온에 보관이 가능한 장점이 있습니다. 상대적으로
              에스프레소 머신이나, 핸드드립을 사용 할 때 사용되는 그라인더나 여러가지 용품의 가격을
              비교하면 저렴한 편에 속합니다. 그러나 개별 캡슐의 가격이 조금 비싼편으로, 커피를 자주
              마실수록 한 잔에 대한 금액이 부담 될 수 있습니다.
            </div>
            <div className='tag'>
              {data.tag.map((singleTag: Tags) => (
                <Tag style='ClearTag' key={singleTag.id} value={singleTag.tagName} />
              ))}
            </div>
          </div>
        </div>
        <div className='box_radar'>{radarInfo && <ProductRadarChart radarInfo={radarInfo} />}</div>
      </section>
      <section className='section_image'>
        <div className='title'>더욱 다양한 용품들을 만나보세요.</div>
        <div className='image_box'>
          <div className='image' id='first'>
            <Image
              style='ButtonImage'
              type='button'
              key={allItems[0].id}
              src={allItems[0].imageUrl}
              onClick={() => {
                setSelectedItem(allItems[0])
                setIsItemClicked(!isItemClicked)
              }}
            />
            <div className='singleName'>{allItems[0].itemName}</div>
          </div>
          <div className='image' id='second'>
            <Image
              style='ButtonImage'
              type='button'
              key={allItems[1].id}
              src={allItems[1].imageUrl}
              onClick={() => {
                setSelectedItem(allItems[1])
                setIsItemClicked(!isItemClicked)
              }}
            />
            <div className='singleName'>{allItems[1].itemName}</div>
          </div>
        </div>
        <div className='image_box'>
          <div className='image' id='third'>
            <Image
              style='ButtonImage'
              type='button'
              key={allItems[2].id}
              src={allItems[2].imageUrl}
              onClick={() => {
                setSelectedItem(allItems[2])
                setIsItemClicked(!isItemClicked)
              }}
            />
            <div className='singleName'>{allItems[2].itemName}</div>
          </div>
          <div className='image' id='fourth'>
            <Image
              style='ButtonImage'
              type='button'
              key={allItems[3].id}
              src={allItems[3].imageUrl}
              onClick={() => {
                setSelectedItem(allItems[3])
                setIsItemClicked(!isItemClicked)
              }}
            />
            <div className='singleName'>{allItems[3].itemName}</div>
          </div>
        </div>
      </section>
      {isItemClicked ? (
        <ProductItem
          selectedItem={selectedItem}
          handlechecked={() => setIsItemClicked(!selectedItem)}
        />
      ) : (
        ''
      )}
    </ProductResultContainer>
  )
}
