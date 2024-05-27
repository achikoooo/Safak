// Data

import { menu } from '../../../data/menu'

// Components

import MenuItem from './menuitem/MenuItem'



import './menu.scss'

const Menu = () => {

  return (
    <aside className='menu'>
      {menu.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}

    </aside>
  )
}

export default Menu
