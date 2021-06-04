import { useEffect, useState } from 'react'
import { CoffeeResultType, itemResult, TestResult, Tags, CrawlingType } from 'interface'
import { CoffeeItemContainer } from './CoffeeItem.style'
import ShareAndLike from 'components/share-and-like/ShareAndLike'
import CoffeeRadarChart from 'components/radar-chart/CoffeeRadarChart'
import { AiFillCloseCircle } from 'react-icons/ai'
import CoffeeMap from 'components/coffee-map/CoffeeMap'
import Tag from 'components/button/Tag'
import axios from 'axios'
import Loading from 'components/Loading/Loading'

type Props = {
  TestResult?: TestResult
  CoffeeData: itemResult
  handlechecked: () => void
  handleTagClick?: (tag: Tags) => void
}

export default function CoffeeItem({
  CoffeeData,
  TestResult,
  handlechecked,
  handleTagClick,
}: Props) {
  const [renderItem] = useState<itemResult>(CoffeeData)
  const [crawledData, setCrawledData] = useState<CrawlingType[]>([])
  const { itemName, itemDetail, tag, coffeeCharacter } = CoffeeData

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
    <CoffeeItemContainer>
      <div className='closebtn'>
        <button className='close' onClick={handlechecked}>
          <AiFillCloseCircle />
        </button>
      </div>

      <div className='back1'>
        <video src='./backvideo.mp4' muted autoPlay loop />
      </div>
      <section className='Container'>
        <div className='box_map'>
          <CoffeeMap type={renderItem.iso || 'All'} coffee={renderItem} />
        </div>

        <div className='box_radar'>
          {radarInfo && <CoffeeRadarChart type='item' radarInfo={radarInfo} />}
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
                onClick={() => (handleTagClick ? handleTagClick(singleTag) : undefined)}
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
      <ShareAndLike renderItem={renderItem} testResult={TestResult} />
    </CoffeeItemContainer>
  )
}
