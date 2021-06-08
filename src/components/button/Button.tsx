import React from 'react'
import theme from 'styles/theme'

type Type = {
  style: 'MainBtnBrown' | 'MenuBtn' | 'UserBtn' | 'MainBtnIvory' | 'ModifyBtn'
  type?: 'button' | 'submit' | 'reset'
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  value: string
}

const { MainBtnBrown, MenuBtn, UserBtn, MainBtnIvory, ModifyBtn } = theme

export default function Button({ style, type, handleClick, value }: Type) {
  switch (style) {
    case 'MainBtnBrown':
      return (
        <MainBtnBrown type={type} onClick={handleClick}>
          {value}
        </MainBtnBrown>
      )
    case 'MenuBtn':
      return (
        <MenuBtn type={type} onClick={handleClick}>
          {value}
        </MenuBtn>
      )
    case 'UserBtn':
      return (
        <UserBtn type={type} onClick={handleClick}>
          {value}
        </UserBtn>
      )
    case 'MainBtnIvory':
      return (
        <MainBtnIvory type={type} onClick={handleClick}>
          {value}
        </MainBtnIvory>
      )
    case 'ModifyBtn':
      return (
        <ModifyBtn type={type} onClick={handleClick}>
          {value}
        </ModifyBtn>
      )
  }
}
