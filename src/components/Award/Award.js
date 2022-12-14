import React from "react";
import template from "./Award.jsx";

class Award extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      year: props.year,
      extra: props.extra,
    }
  }

  render() {
    return template(
      this.state.title,
      this.state.year,
      this.state.extra,
    );
  }
}

export default Award;
