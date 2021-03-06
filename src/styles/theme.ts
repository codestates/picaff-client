import MainBtnBrown from './buttons/MainBtnBrown'
import MainBtnIvory from './buttons/MainBtnIvory'
import MenuBtn from './buttons/MenuBtn'
import UserBtn from './buttons/UserBtn'
import GreenTag from './tags/GreenTag'
import ClearTag from './tags/ClearTag'
import ModifyBtn from './buttons/ModifyBtn'

const deviceSizes = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
}

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
  laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
}

const color = {
  BrownC: '#604C4C',
  StrongBrownC: '#362415',
  WhiteC: '#FFFEFC',
  PointC: '#0B421A',
  BackC: '#F7F7F4',
  NavC: '#F2F1E5',
  YelloC: '#EAC784',
  GreyC: '#696b6a',
}

const theme = {
  device,
  color,
  deviceSizes,
  MainBtnBrown,
  MainBtnIvory,
  MenuBtn,
  UserBtn,
  GreenTag,
  ClearTag,
  ModifyBtn,
}

export default theme
