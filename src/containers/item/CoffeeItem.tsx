import { useState } from 'react'
import { CoffeeResultType, itemResult, TestResult, Tags, CrawlingType } from 'interface'
import { CoffeeItemContainer } from './CoffeeItem.style'
import ShareAndLike from 'components/share-and-like/ShareAndLike'
import CoffeeRadarChart from 'components/radar-chart/CoffeeRadarChart'
import { AiFillCloseCircle } from 'react-icons/ai'
import CoffeeMap from 'components/coffee-map/CoffeeMap'
import Tag from 'components/button/Tag'
import { crawlingDataSample } from 'interface/sampledata'
// import axios from 'axios'

type Props = {
  TestResult: TestResult
  CoffeeData: itemResult
  handlechecked: () => void
}

export default function CoffeeItem({ CoffeeData, TestResult, handlechecked }: Props) {
  const [renderItem] = useState<itemResult>(CoffeeData)
  const [crawledData] = useState<CrawlingType[]>(crawlingDataSample)
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

  // useEffect(() => {
  //   const getCrawlingData = async () => {
  //     const res = await axios.post('https://localhost:4000/item/crawling', {
  //       itemName: itemName,
  //     })
  //     if (res.status === 200) {
  //       setCrawledData(res.data)
  //     } else {
  //       console.log('크롤링데이터를 받아올 수 없음')
  //     }
  //   }
  //   getCrawlingData()
  // }, [])

  return (
    <CoffeeItemContainer>
      <div className='closebtn'>
        <button className='close' onClick={handlechecked}>
          <AiFillCloseCircle />
        </button>
      </div>

      <div className='section_result'>
        <div className='back1' />

        <div className='section_left'>
          <div className='box_map'>
            <CoffeeMap type={CoffeeData.iso || 'All'} coffee={CoffeeData} />
          </div>
          <div className='box_market'>
            <div className='marketTable'>
              {crawledData.map((singleList: CrawlingType) => (
                <div className='singleList'>
                  <img src={singleList.imageURL} />
                  <div className='itemInfo'>
                    <div>{singleList.title}</div>
                    <div>가격: {singleList.price} 원</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='section_right'>
          <div className='box_desc'>
            <div className='name'>{itemName}</div>
            <div className='text'>{itemDetail}</div>
            <div className='tag'>
              {tag.map((singleTag: Tags) => (
                <Tag style='ClearTag' key={singleTag.id} value={singleTag.tagName} />
              ))}
            </div>
          </div>
          <div className='box_radar'>{radarInfo && <CoffeeRadarChart radarInfo={radarInfo} />}</div>
        </div>
      </div>
      <ShareAndLike renderItem={renderItem} testResult={TestResult} />
    </CoffeeItemContainer>
  )
}
