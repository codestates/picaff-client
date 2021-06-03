import { useEffect, useRef, useState } from 'react'
import { CoffeeResultContainer } from './CoffeeResult.style'
import { itemResult, CoffeeResultType, Tags, TestResult } from 'interface'
import CoffeeRadarChart from 'components/radar-chart/CoffeeRadarChart'
import Tag from 'components/button/Tag'
import CoffeeMap from 'components/coffee-map/CoffeeMap'
import CoffeeItem from 'containers/item/CoffeeItem'
import { RequestAllItem } from 'module/Coffeemap'

type Props = {
  TestResult: TestResult
}

const initdata: itemResult = {
  id: 0,
  itemName: 'Coffee example',
  itemPrice: 0,
  itemDetail: {
    title: '',
    content: [],
  },
  type: 'product',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/600px-Flag_of_Kenya.svg.png',
  iso: '',
  isLiked: false,
  tag: [{ id: 0, tagName: '' }],
}

export default function CoffeeResult({ TestResult }: Props) {
  const [selectedItem] = useState<itemResult>(TestResult.coffeeResult)
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false)
  const [CoffeeDataArr, setCoffeeDataArr] = useState<itemResult[]>([])
  const [CoffeeData, setCoffeeData] = useState<itemResult>(initdata)
  const [selectedTag, setSelectedTag] = useState<string>('')
  const mapRef = useRef<HTMLElement>(null)

  const { coffeeCharacter } = selectedItem
  const radarInfo: CoffeeResultType | undefined = coffeeCharacter && {
    coffeeName: selectedItem.itemName,
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

  // 테스트 결과페이지에서 props로 전체 커피 데이터를 받아오는 로직입니다
  useEffect(() => {
    async function GetCoffeData() {
      setCoffeeDataArr(await RequestAllItem('coffee'))
    }

    GetCoffeData()
  }, [])

  // 이함수는 테스트 결과 페이지에서 맵을 불러올때 사용해야할 것 같습니다
  const handleRegionClick = (Region: string) => {
    CoffeeDataArr.forEach((coffee) => {
      if (coffee.iso === Region) {
        setCoffeeData(coffee)
      }
    })
    setIsItemClicked(!isItemClicked)
  }

  const handleTagClick = (tag: Tags) => {
    mapRef.current?.scrollIntoView()
    setSelectedTag(tag.tagName)
    if (isItemClicked) setIsItemClicked(false)
  }

  return (
    <CoffeeResultContainer className='section_coffee'>
      <section className='section_result'>
        <div className='box_map'>
          <CoffeeMap type={selectedItem.iso || 'All'} coffee={selectedItem} />
        </div>
        <div className='parent_desc'>
          <div className='box_desc'>
            <div className='name'>{selectedItem.itemDetail.title}</div>
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
          {radarInfo && <CoffeeRadarChart type='result' radarInfo={radarInfo} />}
        </div>
      </section>
      <section className='section_map' ref={mapRef}>
        <CoffeeMap
          type={'All'}
          handleRegionClick={handleRegionClick}
          coffee={CoffeeDataArr}
          selectedTag={selectedTag}
        />
      </section>
      {isItemClicked ? (
        <CoffeeItem
          TestResult={TestResult}
          CoffeeData={CoffeeData}
          handlechecked={() => setIsItemClicked(!isItemClicked)}
          handleTagClick={handleTagClick}
        />
      ) : (
        ''
      )}
    </CoffeeResultContainer>
  )
}
