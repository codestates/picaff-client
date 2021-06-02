import { useEffect, useState } from 'react'
import { CoffeeResultContainer } from './CoffeeResult.style'
import { itemResult, CoffeeResultType, Tags, TestResult } from 'interface'
import CoffeeRadarChart from 'components/radar-chart/CoffeeRadarChart'
// import CoffeeItem from 'containers/item/CoffeeItem'
import Tag from 'components/button/Tag'
import CoffeeMap from 'components/coffee-map/CoffeeMap'
import CoffeeItem from 'containers/item/CoffeeItem'
import { RequestAllItem } from 'module/Coffeemap'
import { coffeetempArr } from 'interface/sampledata'

type Props = {
  TestResult: TestResult
}

const initdata: itemResult = {
  id: 0,
  itemName: '',
  itemPrice: 0,
  itemDetail: '',
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
  const [CoffeeDataArr, setCoffeeDataArr] = useState<itemResult[]>(coffeetempArr)
  const [CoffeeData, setCoffeeData] = useState<itemResult>(initdata)
  const [selectedTag, setSelectedTag] = useState<string>('')

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
    setIsItemClicked(!isItemClicked)
    CoffeeDataArr.forEach((coffee) => {
      if (coffee.iso === Region) {
        setCoffeeData(coffee)
      }
    })
  }

  const handleTagClick = (tag: Tags) => {
    setSelectedTag(tag.tagName)
  }

  return (
    <CoffeeResultContainer className='section_coffee'>
      <section className='section_result'>
        <div className='box_map'>
          <CoffeeMap type={selectedItem.iso || 'All'} coffee={selectedItem} />
        </div>
        <div className='parent_desc'>
          <div className='box_desc'>
            <div className='name'>{selectedItem.itemName}</div>
            <div className='text'>
              {selectedItem.itemDetail}는 부드럽고 향이 풍부하며 묵직한 바디감을 즐길 수 있는
              원두입니다. 브라질은 세계 최대 규모의 커피 생산국이며, 대규모 농장에서 경작하는 경우가
              많습니다. 약한 산미와 비교적 묵직한 바디감으로 블랜딩커피의 베이스로도 자주 사용되며,
              신맛을 싫어하시는 분들이 많이 찾으시는 커피입니다. 브라질 고유의 Pulped-natural
              가공방식과 동글동글하고 납작한 콩의 외관이 브라질 커피의 또다른 특징입니다.
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
        <div className='box_radar'>{radarInfo && <CoffeeRadarChart radarInfo={radarInfo} />}</div>
      </section>
      <section className='section_map'>
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
        />
      ) : (
        ''
      )}
    </CoffeeResultContainer>
  )
}
