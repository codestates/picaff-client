import styled from 'styled-components'

type ProductItemType = {
  isItemClicked: boolean
}

export const ProductItemContainer = styled.div<ProductItemType>`
  display: ${({ isItemClicked }) => (isItemClicked ? 'flex' : 'none')};
  flex-direction: column;

  width: 70%;

  .top_container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .section_top {
    flex: 1 1 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .section_top_photo {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > img {
      flex: 2 1 0;
      padding: 10px;
      border: 2px solid skyblue;
      width: 100%;
      height: 100%;
    }

    .title {
      flex: 0.5 1 0;
      border: 2px solid skyblue;
      width: 100%;
      height: 100%;
    }

    .short_desc {
      flex: 0.5 1 0;
      border: 2px solid skyblue;
      width: 100%;
    }

    .description {
      flex: 1 1 0;
      border: 2px solid skyblue;
      width: 100%;
    }
  }

  .section_top_chart {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > div {
      flex: 2 1 0;
      height: 80%;
      border: 2px solid skyblue;
      width: 100%;
    }

    & > span {
      flex: 1 1 0;
      border: 2px solid skyblue;
      width: 100%;
      height: 100%;
    }

    .tag {
      flex: 1 1 0;
      border: 2px solid skyblue;
      width: 100%;
    }
  }

  .section_bottom {
    flex: 1 1 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .section_bottom_right {
    flex: 1 1 0;
  }

  .shareandlike {
    position: absolute;
    top: 50%;
    right: 100px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;

    .section_top {
      display: flex;
      flex-direction: column;
    }

    .shareandlike {
      position: static;
    }
  }
`

export default ProductItemContainer
