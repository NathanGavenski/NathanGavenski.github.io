import "./GitHubCard.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar, faCodeBranch, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../services/ThemeService';

function template(repoUrl, repoData, contributorsCount, issuesCount, languagePercentages) {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) =>
        <div>
          {
            repoData &&
            <div className={`github-repo-card ${theme}`}>
              <div className="repo-header">
                <FontAwesomeIcon icon={faGithub} className="icons" />
                <a href={repoUrl} className="repo-name">{repoData.name}</a>
              </div>
              <p className="repo-description">{repoData.description || "No description provided."}</p>
              <div className="repo-stats">
                {
                  contributorsCount && 
                  <div className="stat-group">
                    <span className="stat">
                      <FontAwesomeIcon icon={faUserFriends} className="icons" />
                      {contributorsCount}
                    </span>
                    <span className="stat-label">Contributors</span>
                  </div>
                }
                {
                  issuesCount != null && 
                  <div className="stat-group">
                    <span className="stat">
                      <FontAwesomeIcon icon={faDotCircle} className="icons" />
                      {issuesCount}
                    </span>
                    <span className="stat-label">Issues</span>
                  </div>
                }
                <div className="stat-group">
                  <span className="stat">
                    <FontAwesomeIcon icon={faStar} className="icons" />
                    <span>{repoData.stargazers_count}</span>
                  </span>
                  <span className="stat-label">Stars</span>
                </div>
                <div className="stat-group">
                  <span className="stat">
                    <FontAwesomeIcon icon={faCodeBranch} className="icons" />
                    <span>{repoData.forks_count}</span>
                  </span>
                  <span className="stat-label">Forks</span>
                </div>
              </div>
              {
                languagePercentages &&
                <div className="language-bars">
                  {languagePercentages}
                </div>
              }
            </div>
          }
        </div>
    }
    </ThemeContext.Consumer>
  );
};

export default template;
