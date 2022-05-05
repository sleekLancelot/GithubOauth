import React from 'react'
import { useSelector } from 'react-redux';

import './Nav.scss'

const Nav = ({ }) => {

  const { 
    details: {
      public_repos,
    },
  } = useSelector((store) => store.user);;

  const navItems = [
    {
      icon: <i className="fas fa-book-open"></i>,
      label: 'Overview',
    },
    {
      icon: <i className="fas fa-box"></i>,
      label: 'Repositories',
      count: public_repos,
      className: 'active',
    },
    {
      icon: <i className="fas fa-border-all"></i>,
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
              className={`link ${item.className ? item.className : ''}`}
            >
              {
                item.icon && item.icon
              }
              <span className='label'>{item.label}</span>
              {
                !!item.count &&
                <span className='count'>{item.count}</span>
              }
            </li>
          ))
        }
      </ul>

      <hr />
    </div>
  )
}

export default Nav