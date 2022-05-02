import React from 'react'
import { useNavigate } from 'react-router-dom';

import { provider } from '../../config/authMethod'
import githubAuth from '../../service/auth'
import { getUser } from '../../service/User.actions'
import './Login.scss'

import { 
  setProfile, 
  setAuthentication,
} from '../../redux/slices/userSlice'
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (provider) => {
    githubAuth( provider )
    .then( res => {
      if ( res.user ) {
        localStorage.setItem("auth", JSON.stringify({
          accessToken: res._tokenResponse.oauthAccessToken,
        }));

        getUser()
        .then( res => {
          // console.log(res)
          dispatch( setProfile( res.data ) )
          dispatch( setAuthentication( true ) )
          navigate('/')
        })

      }
    })
    .catch( err => {
      console.log(err)
    })

  }
  return (
    <div className='login'>
      <div className="content">
        <i className="fab fa-github"></i>
        <button
          onClick={() => {
            login( provider )
          }}
        >Login with Github</button>
      </div>
    </div>
  )
}

export default Login