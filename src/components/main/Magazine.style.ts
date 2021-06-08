import styled from 'styled-components'

export const MagazineComponent = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.BrownC};
  color: white;

  display: flex;
  flex-direction: row;

  & > .left {
    flex: 1 1 0;
  }

  & > .right {
    flex: 1 1 0;
  }
`

export default MagazineComponent
