import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }

  max-width: ${({ theme }) => theme.device.mobile - 5};
`
