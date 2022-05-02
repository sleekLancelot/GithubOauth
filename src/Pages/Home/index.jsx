import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../redux/slices/userSlice';

import './Home.scss'
import Profile from '../../Components/Profile/Profile';
import RepoCard from '../../Components/Repo/RepoCard';
import Spinner from '../../Components/spinner';

const Home = () => {
  const { isAuthenticated, details, repos, repoStatus } = useSelector((store) => store.user);;

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
  
  return isAuthenticated && (
    <div className="home">
      <div className="pageContent">
        <Profile />
        <div className='repos'>
          {
            repoStatus === 'RESOLVED' && repos ? 
            repos.map( ( repo, index ) => (
              <RepoCard
                key={index}
                repo={repo}
              />
            ) ) :
            <Spinner />
          }
        </div>
      </div>
    </div>
  )
}

export default Home