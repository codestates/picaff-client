import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  max-width: ${({ theme }) => theme.device.mobile - 5};
`
