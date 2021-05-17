<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> 5449a1bfb882810723d42ff77b51d8d715465d57
import theme from 'styles/theme'

type Type = {
  style: 'MainBtnBrown' | 'MenuBtn' | 'UserBtn' | 'MainBtnIvory'
<<<<<<< HEAD
  type?: 'button' | 'submit' | 'reset'
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
=======
>>>>>>> 5449a1bfb882810723d42ff77b51d8d715465d57
}

const { MainBtnBrown, MenuBtn, UserBtn, MainBtnIvory } = theme

<<<<<<< HEAD
export default function Button({ style, type, handleClick }: Type) {
  switch (style) {
    case 'MainBtnBrown':
      return <MainBtnBrown type={type} onClick={handleClick} />
    case 'MenuBtn':
      return <MenuBtn type={type} onClick={handleClick} />
    case 'UserBtn':
      return <UserBtn type={type} onClick={handleClick} />
    case 'MainBtnIvory':
      return <MainBtnIvory type={type} onClick={handleClick} />
=======
export default function Button({ style }: Type) {
  switch (style) {
    case 'MainBtnBrown':
      return <MainBtnBrown />
    case 'MenuBtn':
      return <MenuBtn />
    case 'UserBtn':
      return <UserBtn />
    case 'MainBtnIvory':
      return <MainBtnIvory />
>>>>>>> 5449a1bfb882810723d42ff77b51d8d715465d57
  }
}
