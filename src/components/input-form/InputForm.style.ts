import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  & > label {
    margin-left: 0.3rem;
    margin-bottom: 3px;
    color: ${({ theme }) => theme.color.StrongBrownC};
  }

  & > input {
    max-width: 280px;
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
    border-width: calc(3 * 1px);
    border-style: solid;
    border-color: var(--accent);
    border-radius: calc(6 * 1px);
    outline: transparent;
    width: 100%;
    transition: border-color cala(0.2 * 1s) ease;
    &:focus {
      --accent: ${({ theme }) => theme.color.PointC};
    }

    --accent: ${({ theme }) => theme.color.BrownC};
  }
`
