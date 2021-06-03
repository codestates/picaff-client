import styled from 'styled-components'

export const EndedTestContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 10vh;
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
    display: block;
    object-fit: cover;
    z-index: 998;
    position: relative;
    margin: 0 auto;
    top: 5%;
    width: 50%;
    height: 50%;
  }

  & button {
    position: absolute;
    top: 440px;
    width: 160px;
    height: 80px;
  }
`
