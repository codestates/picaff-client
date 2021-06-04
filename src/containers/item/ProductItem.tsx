import { useEffect, useState } from 'react'
import { CrawlingType, itemResult, ProductResultType, Tags, TestResult } from 'interface'
import { ProductItemContainer } from './ProductItem.style'
import ShareAndLike from 'components/share-and-like/ShareAndLike'
import ProductRadarChart from 'components/radar-chart/ProductRadarChart'
import { AiFillCloseCircle } from 'react-icons/ai'
import Tag from 'components/button/Tag'
import axios from 'axios'
import Loading from 'components/Loading/Loading'
type Props = {
  TestResult: TestResult
  selectedItem: itemResult
  handlechecked: () => void
  handleTagClick: (tag: Tags) => void
}

export default function ProductItem({
  TestResult,
  selectedItem,
  handlechecked,
  handleTagClick,
}: Props) {
  const [renderItem] = useState<itemResult>(selectedItem)
  const [crawledData, setCrawledData] = useState<CrawlingType[]>([])
  const { itemName, itemDetail, imageUrl, productCharacter, tag } = selectedItem

  const radarInfo: ProductResultType | undefined = productCharacter && {
    productName: itemName,
    productCharacter: {
      id: productCharacter.id,
      accessibility: productCharacter.accessibility,
      convenience: productCharacter.convenience,
      effectiveness: productCharacter.effectiveness,
    },
  }

  useEffect(() => {
    const getCrawlingData = async () => {
      const res = await axios.post('http://localhost:4000/item/crawling', {
        itemName: itemName,
      })
      if (res.status === 200) {
        setCrawledData(res.data)
      } else {
        console.log('데이터를 받아올 수 없음')
      }
    }
    getCrawlingData()
  }, [])

  return (
    <ProductItemContainer>
      <div className='closebtn'>
        <button className='close' onClick={handlechecked}>
          <AiFillCloseCircle />
        </button>
      </div>

      <div className='back1'>
        <video src='./backvideoproduc.mp4' muted autoPlay loop />
      </div>
      <section className='Container'>
        <div className='box_image'>
          <img src={imageUrl} alt=''></img>
        </div>

        <div className='box_radar'>
          {radarInfo && <ProductRadarChart type='item' radarInfo={radarInfo} />}
        </div>

        <div className='box_desc'>
          <div className='name'>{itemDetail.title}</div>
          <div className='text'>
            <p>
              {itemDetail.content.map((content) => (
                <>
                  {content}
                  <br />
                </>
              ))}
            </p>
          </div>
          <div className='tag'>
            {tag.map((singleTag: Tags) => (
              <Tag
                style='ClearTag'
                key={singleTag.id}
                value={singleTag.tagName}
                onClick={() => handleTagClick(singleTag)}
              />
            ))}
          </div>
        </div>

        <div className='box_market'>
          <div className='marketTable'>
            {crawledData.length !== 0 ? (
              crawledData.map((singleList: CrawlingType) => (
                <div className='singleList'>
                  <img src={singleList.imageURL} />
                  <div className='itemInfo'>
                    <span className='itemName'>{singleList.title}</span>
                    <span className='price'>{singleList.price} 원</span>
                  </div>
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </section>
      <ShareAndLike testResult={TestResult} renderItem={renderItem} />
    </ProductItemContainer>
  )
}
