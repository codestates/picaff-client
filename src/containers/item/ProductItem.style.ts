import styled from 'styled-components'

export const ProductItemContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  z-index: 999;
  overflow: hidden;
  background: #dfa73b;
  animation: slide 0.8s ease-in-out;

  .closebtn {
    position: absolute;
    top: 2%;
    right: 2%;
    border: none;
    z-index: 9999;
    & button {
      border: inherit;
      color: #fff;
      font-size: 60px;
    }
    & button:hover {
      color: ${({ theme }) => theme.color.YelloC};
    }
  }
  .Container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 92%;
    height: 100%;
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
  }
  & .back1 {
    box-shadow: 2rem 2rem 5rem 1rem ${({ theme }) => theme.color.YelloC}85;
    position: absolute;
    top: -35vh;
    height: 80vh;
    width: 120%;
    left: -21vw;
    overflow: hidden;
    z-index: -1;
    transform-origin: 50% 0%;
    transform: rotate(-5deg);
    & video {
      display: block;
      object-fit: cover;
      z-index: 998;
      position: relative;
      margin: auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .box_image {
    position: relative;
    display: block;
    max-width: 40vw;
    left: 2rem;
    top: 2rem;
    width: 100%;
    height: 35vh;
    margin: 0;
    border-radius: 15px;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  .box_radar {
    position: absolute;
    top: 2rem;
    right: 10vw;
    height: 50%;
    min-height: 350px;
    width: 30vw;
  }

  .box_market {
    height: 40%;
    width: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 5%;
    right: 15%;
    transition: all 0.8s ease-in-out;

    & .title {
      color: #f7f7f4;
      font-size: 1.5rem;
      margin-left: 5px;
      margin-bottom: 0.5rem;
    }
    .marketTable {
      max-width: 360px;
      right: 0px;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
    }

    .singleList {
      display: flex;
      align-items: center;
      justify-content: start;

      & > img {
        margin-top: 10px;
        margin-left: 5px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      & > .itemInfo {
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        & .itemName {
          font: italic normal 13px/20px 'sans-serif';
          padding-top: 1rem;
        }
        & .price {
          padding-top: 0.3rem;
          font: bold 13px 'sans-serif';
        }
      }
    }
  }

  .box_desc {
    display: inline-block;
    width: 100%;
    padding-right: 40vw;
    display: flex;
    flex-direction: column;
    margin: 0;
    color: white;

    .text {
      margin-top: 2rem;
      font-size: 1.2rem;
      p {
        font-family: 'NanumSquareRoundR';
      }
    }

    .tag {
      margin-top: 2rem;
    }
  }

  #loading {
    padding-top: 100px;
    padding-right: 152px;
  }

  @media (max-width: 1400px) {
    .box_market {
      right: 10%;
    }
  }

  @media (max-width: 1200px) {
    .box_map {
      height: 30vh;
    }
    .box_market {
      right: 5%;
    }
  }
  @media (max-width: 992px) {
    scrollbar-width: none;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    .box_desc {
      margin: 0 auto;
      padding: 0;
      .name {
        font-size: 3rem;
      }
    }
    .box_image {
      position: relative;
      display: block;
      left: 2rem;
      top: 2rem;
      width: 100%;
      max-width: 90%;
      height: fit-content;
      border-radius: 30px;
      overflow: hidden;
      left: 0px;
    }
    .box_radar {
      margin: 0 auto;
      position: relative;
      display: inline-block;
      max-height: 400px;
      height: 100%;
      width: 100%;
      right: 0px;
    }
    .box_market {
      position: relative;
      display: inline-block;
      margin: 0 auto;
      margin-top: 2rem;
      bottom: 0px;
      .marketTable {
        max-width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .box_market {
      right: 0px;
      margin-right: 1rem;
    }
  }
  @media (max-width: 576px) {
  }
  .name {
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #f3f1ef;
    color: transparent;
    margin-top: 60px;
    font-size: 4rem;
  }

  @keyframes slide {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`
