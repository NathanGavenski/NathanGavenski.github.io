import React from "react";
import template from "./GitHubCard.jsx";
import {
  getRepoData, 
  getRepoContributors,
  getRepoIssues,
  getLanguages
} from "../../services/GitHubService.js";

class GitHubCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repoUrl: props.repoUrl,
      repoData: props.repoData,
    };
  }

  componentDidMount() {
    let { repoUrl } = this.state;
    if (repoUrl) getRepoData(repoUrl).then((repoData) => { 
      this.setState({ repoData });
      getRepoIssues(repoData.issues_url).then((issues) => {
        this.setState({ issuesCount: issues.length });
      }); 
      getRepoContributors(repoData.contributors_url).then((contributors) => {
        this.setState({ contributorsCount: contributors.length });
      });
      getLanguages(repoData.languages_url).then((languages) => {
        console.log(languages)
        let percentages = this.calculateLanguagePercentages(languages);
        let bars = this.createLanguageBars(percentages);
        this.setState({ percentages: bars })
      });
    });
  }

  calculateLanguagePercentages = (languages) => {
    const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
    const percentages = {};

    for (const language in languages) {
      percentages[language] = (languages[language] / totalBytes) * 100;
    };
    return percentages;
  };

  createLanguageBars = (percentages) => {
    const languageColors = {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Dockerfile: '#374D54'
    };

    const barsHTML = [];
    for (const language in percentages) {
        const percentage = percentages[language];
        const color = languageColors[language] || '#cccccc'; // Default color if not found
        barsHTML.push(
          <div 
            className="language-bar" 
            style={{width: `${percentage}%`, backgroundColor: color}}
            key={language + color}
          />
        );
    };
    return barsHTML;
};

  render() {
    let { repoUrl, repoData, contributorsCount, issuesCount, percentages } = this.state;
    return template(repoUrl, repoData, contributorsCount, issuesCount, percentages );
  }
}

export default GitHubCard;

