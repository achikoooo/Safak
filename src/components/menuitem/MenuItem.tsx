import { Link } from 'react-router-dom'
import { menu } from '../../data'
import './menuitem.scss'

const MenuItem = () => {
  return (
    <>
      {menu.map((item) => (
        <div className='item'>
          <span className='title' key={item.id}>
            {item.title}
          </span>
          {item.listItems.map((listItem) => (
            <Link className='listItem' to='./' key={listItem.id}>
              <img src={listItem.icon} alt='home' />
              <span className='listItemTitle'>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </>
  )
}

export default MenuItem
