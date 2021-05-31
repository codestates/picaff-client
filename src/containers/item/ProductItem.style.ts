import styled from 'styled-components'

export const ProductItemContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  left: 0px;
  top: 120vh;
  z-index: 999;
  overflow: hidden;
  background: #ffdfb9;
  animation: slide 1s ease-out;

  & .back1 {
    position: absolute;
    top: -40vh;
    height: 60vh;
    width: 200%;
    z-index: -1;
    transform-origin: 50% 0%;
    transform: rotate(-5deg);
    background-position: 400% 400%;
    background: linear-gradient(-45deg, #921416, #eacda3, #f46b45, #eea849);
    background-size: 400% 400%;
    background-repeat: no-repeat;
    animation: gradient 5s ease infinite;
  }

  & .closebtn {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 0px;
    margin-right: 5%;
    & .close {
      font-size: 60px;
    }
  }

  .top_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid green;
    overflow: hidden;
  }

  .section_top {
    flex: 1 1 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .section_top_photo {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > img {
      flex: 2 1 0;
      padding: 10px;
      border: 2px solid skyblue;
      width: 100%;
      height: 100%;
    }

    .title {
      flex: 0.5 1 0;
      border: 2px solid skyblue;
      width: 100%;
      height: 100%;
    }

    .short_desc {
      flex: 0.5 1 0;
      border: 2px solid skyblue;
      width: 100%;
    }

    .description {
      flex: 1 1 0;
      border: 2px solid skyblue;
      width: 100%;
    }
  }

  .section_top_chart {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > div {
      flex: 2 1 0;
      height: 80%;
      border: 2px solid skyblue;
      width: 100%;
    }

    & > span {
      flex: 1 1 0;
      border: 2px solid skyblue;
      width: 100%;
      height: 100%;
    }

    .tag {
      flex: 1 1 0;
      border: 2px solid skyblue;
      width: 100%;
    }
  }

  .section_bottom {
    flex: 1 1 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .section_bottom_right {
    flex: 1 1 0;
  }

  .shareandlike {
    position: absolute;
    top: 50%;
    right: 100px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;

    .section_top {
      display: flex;
      flex-direction: column;
    }

    .shareandlike {
      position: static;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
      rotate: rotate(5deg);
    }
    50% {
      background-position: 100% 50%;
      rotate: rotate(100deg);
    }
    100% {
      background-position: 0% 50%;
      rotate: rotate(5deg);
    }
  }

  @keyframes slide {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }
`

export default ProductItemContainer
