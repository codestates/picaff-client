import styled from 'styled-components'

export const CoffeeMapContainer = styled.section`
  width: 100%;
  height: 100%;
  & > a[href^="http://maps.google.com/maps"],a[href^="https://maps.google.com/maps"],a[href^="https://www.google.com/intl/ko-KR_US/help/terms_maps.html"],.gmnoprint
  {
    display: none !important;
  }
`
