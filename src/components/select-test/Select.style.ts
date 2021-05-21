import styled from 'styled-components'

export const SelectContainer = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  h1,
  p {
    margin: 0 auto;
    color: ${({ theme }) => theme.color.YelloC};
    font-weight: normal;
    text-align: center;
  }

  .icon-source {
    display: none;
  }

  .icon-star {
    stroke-width: 1;
    stroke: rgba(242, 242, 194, 1);
    stroke-dasharray: 84;
    stroke-dashoffset: 85;
    stroke-opacity: 0.2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: rgba(242, 242, 194, 0);
    animation: stroke 1s ease-in-out forwards;
    transition: fill 0.3s;
    transform: rotate(-30deg);
    transform-origin: center;
  }

  .rate:hover {
    &::after {
      animation: starHover 0.5s;
    }
    & svg {
      animation: rateHover 0.5s ease-out forwards;
    }
  }

  .rate:hover .icon-star {
    stroke-opacity: 0.8;
    fill: rgba(242, 242, 194, 0.6);
  }

  button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 7rem;
    height: 8rem;
    padding: 2rem 1rem;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.YelloC};
    font-family: inherit;
    transition: opacity 0.3s;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;

    & svg {
      width: 100%;
      height: 100%;
      transition: transform 0.3s;
    }
    &::before {
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      right: 0;
      display: block;
      margin: auto;
      opacity: 0;
      content: attr(title);
      transition: color 1s;
      opacity: 1;
    }

    &:hover::before {
      color: ${({ theme }) => theme.color.PointC};
    }

    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 2rem;
      height: 2rem;
      content: '';
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path fill='rgba(243, 243, 215, 1)' d='M12,1.776l3.286,6.779l7.464,1.032l-5.433,5.221l1.326,7.417L12,18.67l-6.645,3.555l1.327-7.417L1.25,9.587l7.464-1.032L12,1.776z'/></svg>");
      background-repeat: no-repeat;
      background-size: 100%;
      transform: rotate(10deg) translateY(1px);
      animation: fadeIn 1s forwards 0.5s;
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 0.1;
    }
  }
  @keyframes stroke {
    to {
      stroke-dashoffset: 0;
      transform: rotate(10deg);
    }
  }

  @keyframes rateHover {
    40% {
      transform: scale(1.25) rotate(-5deg);
    }
    60% {
      transform: scale(1.25) rotate(4deg);
    }
    75% {
      transform: scale(1.25) rotate(-3deg);
    }
    100% {
      transform: scale(1.25) rotate(0deg);
    }
  }

  @keyframes starHover {
    0% {
      transform: rotate(10deg) translateY(1px) scale(1);
      opacity: 0.1;
    }
    10% {
      transform: rotate(10deg) translateY(1px) scale(1);
      opacity: 0.5;
    }
    99% {
      transform: rotate(10deg) translateY(1px) scale(4.75);
      opacity: 0;
    }
    100% {
      transform: rotate(10deg) translateY(1px) scale(1);
      opacity: 0;
    }
  }
`
