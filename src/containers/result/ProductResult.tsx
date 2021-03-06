import { ProductResultContainer } from './ProductResult.style'
import { useEffect, useRef, useState } from 'react'
import { itemResult, ProductResultType, Tags, TestResult } from 'interface'
import ProductRadarChart from 'components/radar-chart/ProductRadarChart'
import ProductItem from 'containers/item/ProductItem'
import Tag from 'components/button/Tag'
import Image from 'components/image/Image'
import { RequestAllItem } from 'module/Coffeemap'

type Props = {
  TestResult: TestResult
}

export default function ProductResult({ TestResult }: Props) {
  const [ProducItems, setProductItems] = useState<itemResult[]>([])
  const [selectedItem, setSelectedItem] = useState<itemResult>(TestResult.productResult)
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false)
  const [selectedTag, setSelectedTag] = useState<string>('')

  const productRef = useRef<HTMLElement>(null)

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
    async function GetProductData() {
      setProductItems(await RequestAllItem('product'))
    }

    GetProductData()
  }, [])

  const handleTagClick = (tag: Tags) => {
    productRef.current?.scrollIntoView()
    setSelectedTag(tag.tagName)
    if (isItemClicked) setIsItemClicked(false)
  }

  return (
    <ProductResultContainer className='section_product'>
      <section className='section_result'>
        <div className='box_image'>
          <img src={selectedItem.imageURL}></img>
        </div>
        <div className='parent_desc'>
          <div className='box_desc'>
            <div className='name'>{selectedItem.itemName}</div>
            <div className='text'>
              <p>
                {selectedItem.itemDetail.content.map((content) => (
                  <>
                    {content}
                    <br />
                  </>
                ))}
              </p>
            </div>
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
        <div className='box_radar'>
          {!isItemClicked && radarInfo && <ProductRadarChart type='result' radarInfo={radarInfo} />}
        </div>
      </section>
      <section className='section_image' ref={productRef}>
        <h2 className='title'>?????? ????????? ???????????? ???????????????.</h2>
        <div className='image_box'>
          {ProducItems.map((singleItem: itemResult, idx) => {
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
                    src={singleItem.imageURL}
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
      {isItemClicked && (
        <ProductItem
          selectedItem={selectedItem}
          TestResult={TestResult}
          handlechecked={() => setIsItemClicked(!selectedItem)}
          handleTagClick={handleTagClick}
        />
      )}
    </ProductResultContainer>
  )
}
