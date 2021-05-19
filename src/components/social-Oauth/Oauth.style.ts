import styled from 'styled-components'

export const SocialLogin = styled.div`
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
        padding-right: 5px;
        height: 1.9rem;
      }

      & > div {
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
        margin-top: 1.2rem;
        padding-right: 2rem;
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
`
