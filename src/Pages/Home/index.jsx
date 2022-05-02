import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../redux/slices/userSlice';

import './Home.scss'
import Profile from '../../Components/Profile/Profile';
import RepoCard from '../../Components/Repo/RepoCard';
import Spinner from '../../Components/spinner';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ results, setResult ] = useState( [] );


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

  const filter = ( e ) => {
    let { value } = e.target;
    setSearchTerm( value );
    value = value.trim().toLowerCase();
    if ( value ) {
      const result = repos.filter( repo => repo?.name.toLowerCase().includes( value ) );

      setResult( result );
    }
  };

  
  return isAuthenticated && (
    <div className="home">
      <div className="pageContent">
        <Profile />
        <div className='repos'>

          <input
            placeholder='Find a repository ...'
            type="text" 
            value={searchTerm} 
            onChange={ filter }
          />

          {
            repoStatus === 'RESOLVED' && repos ? 
            searchTerm && results ? 
            results.map( ( repo, index ) => (
              <RepoCard
                key={index}
                repo={repo}
              />
            ) ) :
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