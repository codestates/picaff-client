import { useEffect, useState } from 'react'
import { CoffeeResultContainer } from './CoffeeResult.style'
import { itemResult, CoffeeResultType, Tags } from 'interface'
import CoffeeRadarChart from 'components/radar-chart/CoffeeRadarChart'
// import CoffeeItem from 'containers/item/CoffeeItem'
import Tag from 'components/button/Tag'
import CoffeeMap from 'components/coffee-map/CoffeeMap'
import CoffeeItem from 'containers/item/CoffeeItem'
import { RequestAllItem } from 'module/Coffeemap'

type Props = {
  data: itemResult
}

const initdata: itemResult = {
  id: 0,
  itemName: '',
  itemPrice: 0,
  itemDetail: '',
  type: 'product',
  imageUrl: '',
  iso: '',
  isLiked: false,
  tag: [{ id: 0, tagName: '' }],
}

export default function CoffeeResult({ data }: Props) {
  const [selectedItem] = useState<itemResult>(data)
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false)
  const [CoffeeDataArr, setCoffeeDataArr] = useState<itemResult[]>([])
  const [CoffeeData, setCoffeeData] = useState<itemResult>(initdata)

  const radarInfo: CoffeeResultType | undefined = data.coffeeCharacter && {
    coffeeName: data.itemName,
    coffeeCharacter: {
      id: data.coffeeCharacter.id,
      sweetness: data.coffeeCharacter.sweetness,
      sourness: data.coffeeCharacter.sourness,
      balance: data.coffeeCharacter.balance,
      body: data.coffeeCharacter.body,
      aroma: data.coffeeCharacter.aroma,
      afterTaste: data.coffeeCharacter.afterTaste,
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

  return (
    <CoffeeResultContainer className='section_coffee'>
      <section className='section_result'>
        <div className='description'>
          <div className='box_map'>
            <CoffeeMap type={selectedItem.iso || 'All'} />
          </div>
          <div className='box_tag'>
            {data.tag.map((singleTag: Tags) => (
              <Tag style='ClearTag' key={singleTag.id} value={singleTag.tagName} />
            ))}
          </div>
          <div className='box_text'>{data.itemDetail}</div>
        </div>
        {radarInfo && <CoffeeRadarChart radarInfo={radarInfo} />}
      </section>
      <section className='section_map'>
        <CoffeeMap type={'All'} handleRegionClick={handleRegionClick} />
      </section>
      {isItemClicked ? (
        <CoffeeItem
          selectedItem={CoffeeData}
          handlechecked={() => setIsItemClicked(!isItemClicked)}
        />
      ) : (
        ''
      )}
    </CoffeeResultContainer>
  )
}
