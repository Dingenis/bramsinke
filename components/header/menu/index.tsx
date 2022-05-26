import React from 'react'
import { MenuListItem, MenuListItemLink, MenuList } from './style'

interface MenuItemProps {
  href: string
  children: React.ReactNode
}
const MenuItem = ({ href, children }: MenuItemProps) => {
  return (
    <MenuListItem>
      <MenuListItemLink href={href}>{children}</MenuListItemLink>
    </MenuListItem>
  )
}

const Menu = () => {
  return (
    <MenuList>
      <MenuItem href='projects'>projects</MenuItem>
      <MenuItem href='about'>about</MenuItem>
      <MenuItem href='contact'>contact</MenuItem>
    </MenuList>
  )
}
export default Menu
