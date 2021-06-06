import styled from 'styled-components'

type Index = {
  index: number
}

export const SliderContainer = styled.div<Index>`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - 80px);
  background: ${({ theme }) => theme.color.StrongBrownC};

  .bubble1 {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.3;
    box-shadow: 50px 150px #0b421a, 200px 250px #604c4c, 250px 400px #eac784, 310px 300px #eac784,
      500px 150px #fffefc, 120px 600px #fffefc, 220px 20px #bea98a, 550px 600px #fffefc,
      70px 100px #fffefc, 30px 0px #fffefc, 110px 130px #fffefc, 80px 600px #eac784,
      660px 450px #0b421a, 500px 330px #604c4c, 50px 370px #eac784, 800px 0px #eac784,
      900px 500px #fffefc, 600px 10px #0b421a, 620px 250px #bea98a, 450px 300px #fffefc,
      920px 250px #604c4c, 1000px 430px #eac784, 980px 650px #eac784, 730px 530px #fffefc,
      1050px 370px #fffefc, 620px 250px #bea98a, 450px 300px #0b421a, 1200px 10px #604c4c,
      1250px 550px #eac784, 1310px 300px #eac784, 1550px 50px #fffefc, 1500px 200px #fffefc,
      1450px 250px #bea98a, 1600px 300px #fffefc, 1650px 30px #604c4c, 1700px 400px #eac784,
      1740px 500px #eac784, 1800px 150px #0b421a, 1830px 300px #fffefc, 1870px 410px #bea98a,
      350px 100px #fffefc, 380px 550px #604c4c, 150px 500px #eac784, 310px 300px #eac784,
      500px 150px #fffefc, 700px 300px #0b421a, 1620px 550px #bea98a, 1370px 510px #fffefc,
      1500px 450px #0b421a, 1480px 600px #604c4c, 1720px 600px #eac784, 1740px 200px #eac784;
    animation: starup 10s linear infinite;
  }

  .bubble2 {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    opacity: 0.2;
    box-shadow: 50px 150px #0b421a, 200px 250px #604c4c, 250px 400px #eac784, 310px 300px #eac784,
      500px 150px #fffefc, 120px 600px #fffefc, 220px 20px #bea98a, 550px 600px #fffefc,
      70px 100px #fffefc, 30px 0px #fffefc, 110px 130px #fffefc, 80px 600px #eac784,
      660px 450px #0b421a, 500px 330px #604c4c, 50px 370px #eac784, 800px 0px #eac784,
      900px 500px #fffefc, 600px 10px #0b421a, 620px 250px #bea98a, 450px 300px #fffefc,
      920px 250px #604c4c, 1000px 430px #eac784, 980px 650px #eac784, 730px 530px #fffefc,
      1050px 370px #fffefc, 620px 250px #bea98a, 450px 300px #0b421a, 1200px 10px #604c4c,
      1250px 550px #eac784, 1310px 300px #eac784, 1550px 50px #fffefc, 1500px 200px #fffefc,
      1450px 250px #bea98a, 1600px 300px #fffefc, 1650px 30px #604c4c, 1700px 400px #eac784,
      1740px 500px #eac784, 1800px 150px #0b421a, 1830px 300px #fffefc, 1870px 410px #bea98a,
      350px 100px #fffefc, 380px 550px #604c4c, 150px 500px #eac784, 310px 300px #eac784,
      500px 150px #fffefc, 700px 300px #0b421a, 1620px 550px #bea98a, 1370px 510px #fffefc,
      1500px 450px #0b421a, 1480px 600px #604c4c, 1720px 600px #eac784, 1740px 200px #eac784;
    animation: starup 15s linear infinite;
  }

  @keyframes starup {
    0% {
      transform: translateY(500px);
    }
    100% {
      transform: translateY(-1000px);
    }
  }

  & .bar {
    background: rgba(255, 255, 255, 0.2);
  }

  & .progress {
    position: relative;
    background-color: ${({ theme }) => theme.color.YelloC};
    width: ${({ index }) => ((index + 1) / 11) * 100}%;
    height: 15px;
    transition: width 1s;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  & .slider {
    white-space: nowrap;
    transition: ease 1000ms;
    transform: translate3d(${(props) => -props.index * 100}%, 0, 0);
    left: 0px;
    top: 0px;

    & .slide {
      position: relative;
      margin: auto 0;
      top: 10vh;
      display: inline-block;
      height: 100%;
      width: 100%;
    }

    & .btnContainer {
      width: 150px;
      height: 50px;
      margin: 2rem auto;

      & > button {
        color: ${({ theme }) => theme.color.WhiteC};
        background: transparent;
        // border: 2px solid ${({ theme }) => theme.color.YelloC};
        border-radius: 10px;
      }

      & > button:hover {
        border: none;
        border-radius: 10px;
      }
    }
  }

  @media (max-width: 998px) {
    .selectcontainer {
      margin-top: 30px;
      margin-bottom: 12px;
    }
    & .slider {
      white-space: nowrap;
      transition: ease 1000ms;
      transform: translate3d(${(props) => -props.index * 100}%, 0, 0);
      left: 0px;
      top: 0px;

      & .slide {
        position: relative;
        margin: auto 0;
        top: 5vh;
        display: inline-block;
        height: 100%;
        width: 100%;
      }

      & .btnContainer {
        width: 160px;
        height: 40px;
        margin: 1rem auto;
      }
    }
  }

  @media (max-width: 500px) {
    .selectcontainer {
      margin-top: 30px;
      margin-bottom: 12px;
    }
    & .slider {
      & .slide {
        top: 0vh;
      }
    }

    .title {
      font-size: 1rem;
    }
  }
`
