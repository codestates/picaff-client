import styled from 'styled-components'

type NavbarType = {
  isActive: boolean
}

export const NavComponent = styled.nav<NavbarType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.NavC};
  padding: 0 24px 0 24px;
  width: 100vw;
  height: 80px;
  padding-left: 10px;

  .navbar_logo {
    width: 70px;
    height: 70px;
    margin-top: 5px;
    cursor: pointer;
  }

  .navbar_menu {
    padding-left: 25px;
    flex: 1 1 0;
    display: flex;
    align-items: flex-start;
    justify-content: start;

    & > a {
      margin-left: 1rem;
      text-decoration: none !important;

      & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px 8px;
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
  }

  .navbar_user {
    display: flex;

    & > a > button {
      margin: 0 5px;
      padding: 2px 8px;
      width: 100px;
      height: 35px;
      font-size: 0.9rem;
      border: 3px solid ${({ theme }) => theme.color.PointC};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .navbar_toggleBtn {
    display: none;
    position: absolute;
    top: 25px;
    right: 20px;
    font-size: 2rem;
    background-color: transparent;
    color: ${({ theme }) => theme.color.StrongBrownC};
    border: none;
    cursor: pointer;
    outline: none;
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    height: ${({ isActive }) => (isActive ? '50%' : '80px')};
    z-index: 1;
    width: 100vw;
    padding: 0;

    .navbar_menu {
      display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      width: 100%;
      padding: 0;

      & > a {
        width: 90%;
        margin: 2px 0;

        & > button {
          width: 100%;
          text-align: center;
          padding-top: 5px;
          outline: none;
          font-size: 1.2rem;

          &:hover {
            color: ${({ theme }) => theme.color.WhiteC};
            background-color: rgba(105, 107, 106, 0.4);
            border-radius: 10px;
          }
        }
      }
    }

    .navbar_user {
      display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;

      & > a {
        width: 90%;
        margin: 5px;
      }

      & > a > button {
        margin: 3px 0;
        width: 100%;
        height: 100%;
        border: 3px solid ${({ theme }) => theme.color.PointC};
        font-size: 1rem;
      }
    }

    .navbar_toggleBtn {
      display: block;
    }
  }
`
export default NavComponent
