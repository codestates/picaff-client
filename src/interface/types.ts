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
