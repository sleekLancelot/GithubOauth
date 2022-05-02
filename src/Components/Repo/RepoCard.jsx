import React from 'react'
import moment from 'moment'
import './RepoCard.scss'

const RepoCard = ( { repo : {
  name,
  description,
  language,
  stargazers_count,
  forks,
  forks_count,
  license,
  updated_at,
} } ) => {
  return (
    <div className='repo_card'>
      <hr />
        <div className="content">
          <div className="info">
            <div className="name_and_status">
              <p className="name">{name}</p>
              <span className="status">public</span>
            </div>

            {
              description &&
              <p className="description">{description}</p>
            }

            <div className="otherInfo">

              {
                language &&
                <span className='r_info language'>
                  <span className="circle"></span>
                  {language}
                </span>
              }

              {
                !!stargazers_count &&
                <span className='r_info stargazers'>
                  <i className="fas fa-star"></i>
                  {' '}{stargazers_count}
                </span>
              }

              {
                !!forks_count &&
                <span className='r_info forks'>
                  <i className="fas fa-code-branch"></i>
                  {' '}{forks_count}
                </span>
              }

              {
                !!license &&
                <span className='r_info license'>
                  <i className="fas fa-balance-scale"></i>
                  {' '}{license?.name}
                </span>
              }

              {
                !!updated_at &&
                <span className='r_info updatedAT'>
                  Updated
                  {' '}{moment(updated_at, "YYYYMMDD").fromNow()}
                </span>
              }
            </div>
          </div>

          <div className="star_select">
            <div className='starDrop'>
              <i className="fas fa-star"></i>
              star
            </div>
            <i className="fas fa-chevron-circle-down"></i>
          </div>
        </div>
    </div>
  )
}

export default RepoCard