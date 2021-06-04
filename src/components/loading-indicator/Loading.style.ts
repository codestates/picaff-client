import styled from 'styled-components'

export const LoadingComponent = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .message {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.WhiteC};
    margin: 10px 0;
  }

  .loading {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 0.5rem solid rgba(11, 66, 26, 0.85);
    border-top-color: ${({ theme }) => theme.color.WhiteC};
    animation: spin 1s infinite linear;
    margin: 10px 0;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default LoadingComponent
