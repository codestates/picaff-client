import styled from 'styled-components'

// type ProductItemType = {
//   isItemClicked: boolean
// }

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
    border: 2px solid green;
    overflow: hidden;
  }

  .section_top {
    flex: 1 1 0;

    display: flex;
    flex-direction: row;
    border: 2px solid magenta;
  }

  .section_top_photo {
    flex: 1 1 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid orange;

    & > img {
      padding: 10px;
      width: 400px;
      border: 2px solid skyblue;
    }
    .title {
      border: 2px solid skyblue;
    }
  }

  .section_top_chart {
    flex: 1 1 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid orange;

    & > div {
      height: 80%;
      border: 2px solid skyblue;
    }

    & > span {
      border: 2px solid skyblue;
    }
  }

  .section_bottom {
    flex: 1 1 0;

    display: flex;
    flex-direction: row;
    border: 2px solid magenta;
  }

  .section_bottom_left {
    flex: 1 1 0;
    border: 2px solid orange;

    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 2px solid skyblue;
    }

    .description {
      border: 2px solid skyblue;
    }
  }

  .section_bottom_right {
    flex: 1 1 0;
    border: 2px solid orange;

    .market {
      display: flex;
      flex-direction: row;
      border: 2px solid skyblue;
      height: 100%;

      & > img {
        flex: 1 1 0;
        border: 2px solid navy;
      }

      & > div {
        flex: 1 1 0;

        display: flex;
        flex-direction: column;
        border: 2px solid navy;

        & > span {
          flex: 1 1 0;
          border: 2px solid skyblue;
        }
      }
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

//  display: ${({ isItemClicked }) => (isItemClicked ? 'flex' : 'none')};

export default ProductItemContainer
