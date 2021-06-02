import { ProductResultContainer } from './ProductResult.style'
import { useEffect, useState } from 'react'
import { itemResult, ProductResultType, Tags, TestResult } from 'interface'
import ProductRadarChart from 'components/radar-chart/ProductRadarChart'
import ProductItem from 'containers/item/ProductItem'
import Tag from 'components/button/Tag'
import Image from 'components/image/Image'
import axios from 'axios'
import { productTempArr } from 'interface/sampledata'

type Props = {
  TestResult: TestResult
}

export default function ProductResult({ TestResult }: Props) {
  const [allItems, setAllItems] = useState<itemResult[]>(productTempArr)
  const [selectedItem, setSelectedItem] = useState<itemResult>(TestResult.productResult)
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false)
  const [selectedTag, setSelectedTag] = useState<string>('')

  const radarInfo: ProductResultType | undefined = selectedItem.productCharacter && {
    productName: selectedItem.itemName,
    productCharacter: {
      id: selectedItem.productCharacter.id,
      accessibility: selectedItem.productCharacter.accessibility,
      convenience: selectedItem.productCharacter.convenience,
      effectiveness: selectedItem.productCharacter.effectiveness,
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

  const handleTagClick = (tag: Tags) => {
    setSelectedTag(tag.tagName)
  }

  return (
    <ProductResultContainer className='section_product'>
      <section className='section_result'>
        <div className='box_image'>
          <img src={selectedItem.imageUrl}></img>
        </div>
        <div className='parent_desc'>
          <div className='box_desc'>
            <div className='name'>{selectedItem.itemName}</div>
            <div className='text'>{selectedItem.itemDetail}</div>
            <div className='tag'>
              {selectedItem.tag.map((singleTag: Tags) => (
                <Tag
                  style='ClearTag'
                  key={singleTag.id}
                  value={singleTag.tagName}
                  onClick={() => handleTagClick(singleTag)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='box_radar'>{radarInfo && <ProductRadarChart radarInfo={radarInfo} />}</div>
      </section>
      <section className='section_image'>
        <div className='title'>더욱 다양한 용품들을 만나보세요.</div>
        <div className='image_box'>
          {allItems.map((singleItem: itemResult, idx) => {
            let active = false
            for (let i = 0; i < singleItem.tag.length; i++) {
              if (selectedTag === singleItem.tag[i].tagName) {
                active = true
              }
            }
            return (
              <div className='itemContainer'>
                <div className={active ? `image ${idx} active` : `image ${idx}`}>
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
                <div className='singleName'>
                  <span>{singleItem.itemName}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {isItemClicked ? (
        <ProductItem
          selectedItem={selectedItem}
          TestResult={TestResult}
          handlechecked={() => setIsItemClicked(!selectedItem)}
        />
      ) : (
        ''
      )}
    </ProductResultContainer>
  )
}
