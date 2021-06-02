import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 100vh;
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

  .section_result {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .section_left {
    flex: 1 1 0;
    height: 100vh;
    border: 1px solid yellow;

    .box_map {
      height: 40%;
      margin: 0;
      border: 1px solid lightblue;
    }

    .box_market {
      height: 60%;
      border: 1px solid lightblue;

      .marketTable {
        width: 90%;
        border: 1px solid white;

        .singleList {
          display: flex;

          & > img {
            width: 8%;
            border-radius: 50%;
          }

          & > .itemInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }


        }
      }
    }
  }

  .section_right {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    height: 100vh;

    .box_desc {
      flex: 1 1 0;
      display: flex;
      flex-direction: column;
      margin: 0;

      .name {
        flex: 1 1 0;
        font-size: 3.5rem;
        margin-top: auto;
        padding-top: 6vh;
      }

      .text {
        flex: 1.5 1 0;
        padding-right: 10vw;
        font-size: 1.2rem;
        font-family: 'NanumSquareRoundR';
      }

      .tag {
        flex: 1 1 0;
      }
    }

    .box_radar {
      flex: 1 1 0;
      width: 75%;
      height: 60%;
      
      .radarChart {
        margin: 0;
        padding-left: 10vw;
      }
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

  @media ${({ theme }) => theme.device.laptop} {

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .section_result {
      display: flex;
      flex-direction: column;

      .section_right {
        flex: 1 1 0;
        display: flex;
        flex-direction: column;
    
        .box_desc {
          
    
          .name {
            font-size: 3.5rem;
            
          }
    
          .text {
            padding: 0;
            font-size: 1.3rem;
          }
    
          .tag {
          }
        }
    
        .box_radar {
          flex: 1 1 0;
          margin: 0;

          .radarChart {
            padding: 0;
          }
        }
    }
  }
`

export default CoffeeItemContainer
