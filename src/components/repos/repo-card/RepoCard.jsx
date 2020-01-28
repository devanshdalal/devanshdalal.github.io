import React, { Component } from 'react';
import { repositoryLogo, languageLogo } from 'utils/helpers';

import './repo-card.css';
import './repo-card-categores.css';

class RepoCard extends Component {  
  state = { repo_logo: repositoryLogo(this.props.repo.name)}

  imageNotFoundError = error => {
    this.setState({repo_logo: languageLogo(this.props.repo.language)})
  }  

  render() {
    const { repo } = this.props
    const { repo_logo } = this.state

    return (
      <a
        className="repo"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='repo-image'>
          <img className='repo-logo' src={repo_logo} onError={this.imageNotFoundError} alt="</>"/>
        </div>
        
        <div className="repo-info">
          <div className="repo-title">{repo.name}</div>
          <div className="repo-description">{repo.description}</div>
          {repo.stargazers_count ? <div className="repo-stars">{repo.stargazers_count} stars</div>: null}
          {repo.forks ? <div className="repo-forks">{repo.forks} forks</div>: null}
        </div>
      </a>
    )
  }
}


export default RepoCard;
