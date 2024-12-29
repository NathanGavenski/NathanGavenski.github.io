import React from "react";
import template from "./Award.jsx";

class Award extends React.Component {
  constructor(props) {
    super(props);
    let extra = props.extra;
    if(typeof(extra) != "object") extra = Array(props.extra);

    this.state = {
      title: props.title,
      year: props.year,
      extra: extra,
      misc: props.misc,
      github: props.github,
    }
  }

  render() {
    let { title, year, extra, misc, github } = this.state;
    return template(title, year, extra, misc, github);
  }
}

export default Award;
