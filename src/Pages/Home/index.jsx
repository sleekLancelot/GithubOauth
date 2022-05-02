import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../redux/slices/userSlice';


const Home = () => {
  const { isAuthenticated, details } = useSelector((store) => store.user);;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const redirect = () => {
    if ( isAuthenticated !== true || details === null ) {
      navigate('/login')
    }
  }

  const fetchRepo = () => {
    if ( isAuthenticated === true || details !== null ) {
      dispatch( getRepos() )
    }
  }

  useEffect(() => {
    redirect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchRepo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="home">
      ooiiii!!! welcome!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae repellendus dolores beatae hic aperiam, fugit earum minima nobis error pariatur ducimus? Deserunt, at voluptatem. Magni nostrum eaque modi maxime aliquid?
    </div>
  )
}

export default Home