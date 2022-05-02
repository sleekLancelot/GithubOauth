import React from 'react'
import './Profile.scss'
import arctic from '../../Assets/img/arctic.png'

import { useSelector } from 'react-redux';

const Profile = () => {
  const { 
    details: { 
      avatar_url,
      login,
      name,
      bio,
      followers,
      following,
      location,
      email,
      twitter_username,
    },
} = useSelector((store) => store.user);

  return (
    <div className='profile'>
      <div className="avatar_box">
        {
          avatar_url &&
          <img src={avatar_url} alt="display avatar" className='avatar' />
        }
      </div>

      <div className="otherInfo">
        <div className="names">
          <h3>{name}</h3>
          <p className='fade'>{login}</p>
        </div>

        <button className="follow">follow</button>

        {
          bio && 
          <p className="bio">
            {bio}
          </p>
        }

        <div className="f_and_f">
          <i className="fas fa-user-friends fade"></i>
          <span className="followers">
            <span className="num">{followers}</span>
            <span className="word fade">followers . </span>
          </span>
          <span className="following">
            <span className="num">{following}</span>
            <span className="word fade">following</span>
          </span>
        </div>

        <div className="contacts">
          {
            location &&
            <div className="con location fade">
              <i className="fas fa-map-marker-alt"></i>
              <span className="word">{location}</span>
            </div>
          }
          {
            email &&
            <div className="con mail fade">
              <i className="fas fa-envelope"></i>
              <span className="word">{email}</span>
            </div>
          }
          {
            twitter_username &&
            <div className="con twitter fade">
              <i className="fab fa-twitter"></i>
              <span className="word">@{twitter_username}</span>
            </div>
          }
        </div>

        <hr />

        <div className="extra">
          <h2>Achievement</h2>
          <img src={arctic} alt="achievement badge" />
        </div>

      </div>
    </div>
  )
}

export default Profile