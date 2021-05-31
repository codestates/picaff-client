import { ProductResultContainer } from './ProductResult.style'
import { useEffect, useState } from 'react'
import { itemResult, ProductResultType, Tags } from 'interface'
import ProductRadarChart from 'components/radar-chart/ProductRadarChart'
import ProductItem from 'containers/item/ProductItem'
import Tag from 'components/button/Tag'
import Image from 'components/image/Image'
import axios from 'axios'

type Props = {
  data: itemResult
}

export default function ProductResult({ data }: Props) {
  const [allItems, setAllItems] = useState<itemResult[]>([])
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

  // 태그 클릭시 해당 태그를 갖고 있는 아이템 리스트를 받아옴
  // useEffect(() => {
  //   const getSelectedTags = async () => {
  //     const res = await axios.get(
  //       `https://localhost:4000/item/tag?itemType=product&tagId=${selectedTag}`,
  //       {}
  //     )
  //     if (res.status === 200) {
  //       // 태그버튼 클릭시 요청 보냄 - response로 오는 id와 이미지버튼 key값이랑 같은지 체크
  //       // => 같을 경우 className 추가하는 형식으로 스타일 효과주기
  //       // 태그클릭 state 생성 필요
  //     }
  //   }
  //   getSelectedTags()
  // }, [])

  return (
    <ProductResultContainer className='section_product'>
      <section className='section_result'>
        <div className='description'>
          <div className='box_image'>
            <img src={data.imageUrl}></img>
          </div>
          <div className='box_tag'>
            {data.tag.map((singleTag: Tags) => (
              <Tag
                style='ClearTag'
                key={singleTag.id}
                value={singleTag.tagName}
                // onClick={() => setSelectedTag(singleTag.id)}
              />
            ))}
          </div>
          <div className='box_text'>{data.itemDetail}</div>
        </div>
        {radarInfo && <ProductRadarChart radarInfo={radarInfo} />}
      </section>
      <section className='section_image'>
        {allItems.map((singleItem: itemResult) => (
          <div>
            <Image
              style='ButtonImage'
              type='button'
              key={singleItem.id}
              src={singleItem.imageUrl}
              onClick={() => {
                setSelectedItem(singleItem)
                setIsItemClicked(!isItemClicked)
              }}
            />
          </div>
        ))}
      </section>
      <ProductItem selectedItem={selectedItem} />
    </ProductResultContainer>
  )
}
