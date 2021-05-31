import styled from 'styled-components'

// type ProductItemType = {
//   isItemClicked: boolean
// }

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;

  .top_container {
    display: flex;
    flex-direction: column;
    border: 2px solid green;
  }

  .section_top {
    flex: 1 1 0;

    display: flex;
    flex-direction: row;
    border: 2px solid magenta;
  }

  .section_top_photo {
    flex: 1 1 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid orange;

    & > img {
      padding: 10px;
      width: 400px;
      border: 2px solid skyblue;
    }
    .title {
      border: 2px solid skyblue;
    }
  }

  .section_top_chart {
    flex: 1 1 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid orange;

    & > div {
      height: 80%;
      border: 2px solid skyblue;
    }

    & > span {
      border: 2px solid skyblue;
    }
  }

  .section_bottom {
    flex: 1 1 0;

    display: flex;
    flex-direction: row;
    border: 2px solid magenta;
  }

  .section_bottom_left {
    flex: 1 1 0;
    border: 2px solid orange;

    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 2px solid skyblue;
    }

    .description {
      border: 2px solid skyblue;
    }
  }

  .section_bottom_right {
    flex: 1 1 0;
    border: 2px solid orange;

    .market {
      display: flex;
      flex-direction: row;
      border: 2px solid skyblue;
      height: 100%;

      & > img {
        flex: 1 1 0;
        border: 2px solid navy;
      }

      & > div {
        flex: 1 1 0;

        display: flex;
        flex-direction: column;
        border: 2px solid navy;

        & > span {
          flex: 1 1 0;
          border: 2px solid skyblue;
        }
      }
    }
  }
`

//  display: ${({ isItemClicked }) => (isItemClicked ? 'flex' : 'none')};

export default ProductItemContainer
