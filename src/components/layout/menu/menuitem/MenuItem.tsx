import { Link } from 'react-router-dom'
import './menuitem.scss'

// Types

import { type MenuList } from '../../../../data/menu'

const MenuItem = ({ title, listItems }: MenuList) => {
  return (
    <div className='item'>
      <span className='title'>
        {title}
      </span>
      {listItems.map((listItem) => (
        <Link className='list-item' to={listItem.url} key={listItem.id}>
          <img src={listItem.icon} alt='home' />
          <span>{listItem.title}</span>
        </Link>
      ))}
    </div>
  )
}

export default MenuItem
