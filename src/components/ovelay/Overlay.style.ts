import styled from 'styled-components'

export const OverlayContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: -50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;

  & > .image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  & span {
    margin-top: 5px;
    color: ${({ theme }) => theme.color.StrongBrownC};
  }
`
