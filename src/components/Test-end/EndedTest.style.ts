import styled from 'styled-components'

export const EndedTestContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 0px;
  height: 100%;
  z-index: 9999;
  overflow: hidden;

  & > .background {
    position: absolute;
    z-index: -1;
    width: 40%;
    height: 40%;
    border-radius: 50%;
    top: 20%;
    background-color: ${({ theme }) => theme.color.PointC}80;
  }

  & video {
    @media ${({ theme }) => theme.device.mobile} {
      width: ${({ theme }) => theme.deviceSizes.mobile - 30}px;
    }
    object-fit: contain;
    width: 100%;
  }

  & button {
    width: 160px;
    height: 80px;
  }
`
