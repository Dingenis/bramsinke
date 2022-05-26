import styled from '@emotion/styled'
import Menu from './menu'

const HeaderList = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 2.5vmin;
`

const HeaderTitle = styled.div`
  font-size: 1.4rem;
  color: white;
  z-index: 1;
`

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderTitle>bramsinke</HeaderTitle>
        <Menu />
      </HeaderList>
    </header>
  )
}
export default Header
