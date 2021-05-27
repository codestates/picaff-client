import { ProductResultContainer } from './ProductResult.style'
import { useEffect, useState } from 'react'
import { itemResult, ProductResultType, Tags } from 'interface'
import ProductRadarChart from 'components/radar-chart/ProductRadarChart'
import Tag from 'components/button/Tag'
// import Image from 'components/image/Image'
import axios from 'axios'

type Props = {
  data: itemResult
}

export default function ProductResult({ data }: Props) {
  const [selectedTag, setSelectedTag] = useState<number>(0)
  //   const [itemList, setItemList] = useState<itemResult>({})

  const radarInfo: ProductResultType | undefined = data.productCharacter && {
    productName: data.itemName,
    productCharacter: {
      //   id: data.productCharacter.id,
      accessibility: data.productCharacter.accessibility,
      convenience: data.productCharacter.convenience,
      effectiveness: data.productCharacter.effectiveness,
    },
  }

  useEffect(() => {
    const getAllItems = async () => {
      axios.get(`https://localhost:4000/item/all?type=product`, {
        headers: {
          // 'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'withCredentials': true,
        },
      })
      // 받아 온 아이템리스트를 itemList 상태에 넣어줌
    }
    getAllItems()
  }, [])

  // 태그 클릭시 해당 태그를 갖고 있는 아이템 리스트를 받아옴
  useEffect(() => {
    const getSelectedTags = async () => {
      const res = await axios.get(
        `https://localhost:4000/item/tag?itemType=product&tagId=${selectedTag}`,
        {}
      )
      if (res.status === 200) {
        // 태그버튼 클릭시 요청 보냄 - response로 오는 id와 이미지버튼 key값이랑 같은지 체크
        // => 같을 경우 className 추가하는 형식으로 스타일 효과주기
        // 태그클릭 state 생성 필요
      }
    }
    getSelectedTags()
  }, [selectedTag])

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
                onClick={() => setSelectedTag(singleTag.id)}
              />
            ))}
          </div>
          <div className='box_text'>{data.itemDetail}</div>
        </div>
        {radarInfo && <ProductRadarChart radarInfo={radarInfo} />}
      </section>
      <section className='section_image'>
        {/* {itemList.product[0].imageUrl.map((singleImage, id) => (
          <div>
            <Image key={id} style='ButtonImage' type='button' src={singleImage} />
          </div>
        ))} */}
      </section>
    </ProductResultContainer>
  )
}
