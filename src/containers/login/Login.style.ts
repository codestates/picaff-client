import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100%;

  & > form {
    width: 20%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.BackC};
  }

  h2 {
    margin-bottom: 1.7rem;
    text-align: center;
    color: ${({ theme }) => theme.color.BrownC};
  }

  .alert {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.color.PointC};
    font-size: 0.9rem;
  }

  .box_login {
    display: flex;
    flex-direction: column;
    margin: 1.2rem 0;

    .user_login {
      display: flex;
      justify-content: center;
      margin-bottom: 0.5rem;
      height: 3.5rem;
    }

    .social_login {
      display: flex;
      flex-direction: column;

      #google,
      #kakao {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.5rem;
        height: 3.5rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        outline: none;

        & > img {
          display: flex;
          justify-content: center;
          flex: 0 1 auto;
          margin-top: 0.8rem;
          padding-left: 1rem;
          height: 1.9rem;
        }

        & > div {
          display: flex;
          justify-content: center;
          flex: 1 1 auto;
          margin-top: 1.2rem;
          padding-right: 2.2rem;
          font-size: 1rem;
          font-weight: 600;
        }
      }

      #google {
        background-color: #ffffff;
        color: #6e6e6e;
      }

      #kakao {
        background-color: #fee500;
      }
    }
  }

  .greeting {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.PointC};
    font-size: 0.9rem;
  }

  .box_signup {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    #signup {
      padding-bottom: 2px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid ${({ theme }) => theme.color.StrongBrownC};
      background-color: transparent;
      color: ${({ theme }) => theme.color.StrongBrownC};
      font-size: 1rem;
      font-weight: 600;
      outline: none;
      cursor: pointer;

      &:hover {
        color: #696b6a;
        border-bottom: 2px solid #696b6a;
      }
    }
  }
`

export default LoginContainer
