import styled from '@emotion/styled'
import Link from 'next/link'

const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  gap: 30px;
  list-style: none;
`

const MenuListItem = styled.li`
  font-size: 1.4rem;
  color: white;
  z-index: 1;
  transition: color 0.5s;

  :hover {
    color: red;
  }
`

const MenuListItemLink = styled(Link)`
  cursor: pointer;
`

export { MenuList, MenuListItem, MenuListItemLink }
