import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > label {
    padding-left: 0.3rem;
    padding-bottom: 3px;
    color: ${({ theme }) => theme.color.StrongBrownC};
  }

  & > .email {
    position: absolute;
    width: calc(30% - 15px);
    height: calc(45%);
    font-size: 0.9rem;
    right: 3px;
    top: 1.6rem;
  }

  & > input {
    box-sizing: border-box;
    margin-bottom: 1rem;
    width: 100%;
    padding: 0.6rem 0.5rem;
    font-size: 1rem;
    border-width: calc(3 * 1px);
    border-style: solid;
    border-color: var(--accent);
    border-radius: calc(6 * 1px);
    outline: transparent;
    transition: border-color cala(0.2 * 1s) ease;

    &:focus {
      --accent: ${({ theme }) => theme.color.PointC};
    }

    --accent: ${({ theme }) => theme.color.BrownC};
  }
`
