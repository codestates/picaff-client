import styled from 'styled-components'

export const LandingComponent = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.BackC};

  video {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default LandingComponent
