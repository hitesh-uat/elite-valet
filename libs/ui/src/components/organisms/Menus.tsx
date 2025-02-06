import { MenuItem } from '@elitevalet/util/types'
import Link from 'next/link'

export interface IMenuItemProps {
  menuItems: MenuItem[]
}

export const Menus = ({ menuItems }: IMenuItemProps) => {
  return (
    <>
      {menuItems.map(({ label, href }) => (
        <Link
          className="block px-4 py-2 hover:bg-primary-100 rounded-lg transition-colors"
          key={label}
          href={href}
        >
          {label}
        </Link>
      ))}
    </>
  )
}
