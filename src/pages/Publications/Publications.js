import React from "react";
import template from "./Publications.jsx";

import getPublications from '../../services/PublicationsService';

class Publications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      publications: [],
      error: false,
    };
  }

  componentDidMount = () => {
    getPublications()
      .then((response) => {
        this.setState({ publications: response })
      })
      .catch(() => {
        this.setState({ error: true })
      });
  }

  render = () => {
    return template(this.state.publications);
  }
}

export default Publications;
