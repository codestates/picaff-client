import styled from 'styled-components'

export const MagazineRightComponent = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  border: 3px solid red;

  & > .box_title {
    flex: 1 1 0;
    border: 2px solid orange;
  }

  & > .box_desc {
    flex: 1 1 0;
    border: 2px solid orange;
  }

  & > .box_follow {
    flex: 0.5 1 0;
    border: 2px solid orange;
  }

  & > a {
    flex: 1 1 0;
    border: 2px solid orange;
  }
`

export default MagazineRightComponent
