import styled from 'styled-components'

// const ModifyBtn = styled.button`
//   width: 150px;
//   height: 65px;
//   font-size: inherit;
//   background-color: ${({ theme }) => theme.color.PointC};
//   color: ${({ theme }) => theme.color.WhiteC};
//   border: transparent;
//   border-radius: 10px;
//   outline: none;
//   cursor: pointer;

//   &:hover {
//     background-color: transparent;
//     color: ${({ theme }) => theme.color.PointC};
//     border: 3px solid ${({ theme }) => theme.color.PointC};
//   }
// `

const ModifyBtn = styled.button`
  width: 250px;
  height: 80px;
  border: none;
  color: ${({ theme }) => theme.color.PointC};
  position: relative;
  display: inline-block;
  background-color: transparent;
  font: normal normal 1.2rem/0.8rem 'halyard-display', 'sans-serif';
  letter-spacing: 2.93px;
  text-transform: uppercase;
  font-weight: 800;
  pointer-events: initial;
  transition: all 350ms ease-in-out;

  &:hover,
  &:active {
    letter-spacing: 5px;
    color: ${({ theme }) => theme.color.YelloC};
  }
`

// .btn {
//     letter-spacing: 0;
//     border: none;
//     color: #f3f1ef;
//     position: relative;
//     display: inline-block;
//     background-color: transparent;
//     font: normal normal 1rem/0.8rem 'halyard-display', 'sans-serif';
//     letter-spacing: 2.93px;
//     text-transform: uppercase;
//     font-weight: 600;
//     pointer-events: initial;
//     transition: all 350ms ease-in-out;
//   }

//   .btn:hover,
//   .btn:active {
//     letter-spacing: 5px;
//     color: ${({ theme }) => theme.color.YelloC};

export default ModifyBtn
