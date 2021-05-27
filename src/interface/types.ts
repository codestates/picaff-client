export type User = {
  name: string | undefined
  email: string | undefined
  password: string | undefined
  ConfirmPassword?: string | undefined
}

export type CheckEmail = {
  isSend: boolean
  isPassEmail: boolean
  serialNum: string | undefined
  inputNum: string | undefined
  disabled: boolean
}

export type Authorization = {
  accessToken: string | null
  signin?: (accessToken: string, cb: () => void) => void
  signout?: (cb: () => void) => void
}

export type UserInfo = {
  email: string
  name: string
  id: number
  auth?: Authorization
}

export interface KakaoLoginResponse {
  token_type: string
  access_token: string
  expires_in: string
  refresh_token: string
  refresh_token_expires_in: number
  scope: string
}

export type Test = {
  title: string
  score: number | null
}

export type Score = {
  score: number | null
}

export interface TestResult {
  testResultId: number
  productResult: itemResult
  coffeeResult: itemResult
}

export type itemResult = {
  id: number
  itemName: string
  itemPrice: number
  itemDetail: string
  type: 'product' | 'coffee'
  imageUrl: string
  iso?: 'KE' | 'GT' | 'CO' | 'ET' | 'BR' | 'All'
  productCharacter?: ProductCharacter
  coffeeCharacter?: CoffeeCharacter
  isLiked: boolean
  tag: Tags[]
}

type ProductCharacter = {
  id: number
  accessibility: number
  convenience: number
  effectiveness: number
}

type CoffeeCharacter = {
  id: number
  sweetness: number
  sourness: number
  balance: number
  body: number
  aroma: number
  afterTaste: number
}

export type Tags = {
  id: number
  tagname: string
}

export type CoffeeResult = {
  coffeeName: string
  coffeeCharacter: {
    sweetness: number
    sourness: number
    balance: number
    body: number
    aroma: number
    afterTaste: number
  }
}

export type ProductResult = {
  productName: string
  productCharacter: {
    accessibility: number
    convenience: number
    effectiveness: number
  }
}

export type MapOption = {
  zoom: number
  center: { lat: number; lng: number }
}
