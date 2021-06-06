import styled from 'styled-components'

export const FooterComponent = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.BackC};

  display: flex;
  align-items: center;

  padding-top: 2rem;
  padding-bottom: 2rem;

  .service {
    display: flex;
    align-items: center;
    padding-left: 12rem;

    #logo {
      font-size: 2rem;
      letter-spacing: 0.1rem;
      background: linear-gradient(170deg, #0b421a 35%, #eac784 60%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    #copyright {
      margin-left: 2rem;
      font-family: 'NanumSquare';
      font-weight: 500;
    }
  }

  .info {
    padding-left: 20rem;

    #repo {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.color.BrownC};
      margin-bottom: 0.5rem;

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.YelloC};
      }
    }

    #crew {
      display: flex;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.color.PointC};

      & span {
        margin-right: 2.5rem;

        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.color.YelloC};
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;

      #logo {
        font-size: 1.5rem;
      }

      #copyright {
        margin: 0;
        font-size: 0.8rem;
      }
    }

    .info {
      padding: 0;
      margin: auto;
      margin-top: 1rem;
      text-align: center;

      #repo {
        font-size: 1rem;
        color: ${({ theme }) => theme.color.BrownC};
      }

      #crew {
        display: flex;
        flex-direction: row;
        font-size: 0.8rem;
        margin-left: 1rem;

        & span {
          margin-right: 1rem;
        }
      }
    }
  }
`

export default FooterComponent
