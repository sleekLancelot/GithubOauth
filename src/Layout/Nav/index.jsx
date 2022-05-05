import React from 'react'
import './Nav.scss'

const Nav = ({
  public_repos,
}) => {
  const navItems = [
    {
      icon: <i className="fas fa-book-open"></i>,
      label: 'Overview',
    },
    {
      icon: <i className="fas fa-box"></i>,
      label: 'Repositories',
      count: public_repos,
    },
    {
      icon: <i className="far fa-border-all"></i>,
      label: 'projects',
    },
    {
      icon: <i className="fas fa-cube"></i>,
      label: 'Packages',
    },
    {
      icon: <i className="fas fa-star"></i>,
      label: 'Stars',
    },
  ]

  return (
    <div className='navbar'>
      <ul className="links">
        {
          navItems.map( ( item, index ) => (
            <li
              key={index}
              className="link"
            >
              {
                item.icon && item.icon
              }
              <span>{item.label}</span>
              {
                !!item.count &&
                <span>{item.count}</span>
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Nav