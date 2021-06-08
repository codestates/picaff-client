import { TestResult } from 'interface'

// 테스트용 임시 데이터
export const data: TestResult = {
  testResultId: 1,
  productResult: {
    id: 3,
    itemName: 'French Press',
    itemPrice: 5000,
    itemDetail: 'special machine used to make coffee',
    type: 'product',
    imageUrl: 'https://picaff-client-image.s3.ap-northeast-2.amazonaws.com/water-drip.jpg',
    iso: '',
    productCharacter: {
      id: 1,
      accessibility: 4,
      convenience: 4,
      effectiveness: 5,
    },
    isLiked: true,
    tag: [{ id: 3, tagName: 'wellmade' }],
  },
  coffeeResult: {
    id: 1,
    itemName: 'Starbucks Coffee',
    itemPrice: 2000,
    itemDetail: 'starbucky',
    type: 'coffee',
    imageUrl: 'https://picaff-client-image.s3.ap-northeast-2.amazonaws.com/water-drip.jpg',
    iso: 'BR',
    coffeeCharacter: {
      id: 1,
      sweetness: 3,
      sourness: 3,
      balance: 4,
      body: 5,
      aroma: 4,
      afterTaste: 5,
    },
    isLiked: true,
    tag: [{ id: 3, tagName: 'wellmade' }],
  },
}
