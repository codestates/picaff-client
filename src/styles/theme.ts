const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
}

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
}

const color = {
  BrownC: '#604C4C',
  StrongBrownC: '#362415',
  WhiteC: '#FFFCFC',
  PointC: '#0B421A',
  BackC: '#F7F7F4',
  NavC: '#F2F1E5',
}

const theme = {
  device,
  color,
}

export default theme
