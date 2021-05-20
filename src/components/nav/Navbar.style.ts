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
  height: 80px;

  .navbar_logo {
    width: 70px;
    height: 70px;
    padding-top: 5px;
    cursor: pointer;
  }

  .navbar_menu {
    width: 40%;
    display: flex;
    align-items: center;
    padding-left: 0;
    margin: 0;

    & > a {
      width: 100%;
      text-decoration: none !important;

      &#home {
        flex: 1.3 1 0;
      }

      &#test,
      &#magazine {
        flex: 2 1 0;
      }

      & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 12px;
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
  }

  .navbar_user {
    display: flex;
    padding-left: 0;
    & > a > button {
      margin: 0 5px;
      padding: 8px 12px;
      width: 100px;
      font-size: 0.9rem;
      border: 3px solid ${({ theme }) => theme.color.PointC};
    }
  }

  .navbar_toggleBtn {
    display: none;
    position: absolute;
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
    padding: 15px;
    height: 100%;

    .navbar_logo {
      margin: 5px 0;
      cursor: pointer;
    }

    .navbar_menu {
      display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
      width: 100%;

      & > a {
        width: 100%;
        margin: 2px 0;

        & > button {
          width: 100%;
          text-align: center;
          padding-top: 10px;
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

      & > a {
        width: 100%;
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
