import React    from "react";
import template from "./CV.jsx";

class Awards extends React.Component {

    constructor() {
        super();

        let cv_url = "https://mozilla.github.io/pdf.js/web/viewer.html?file="
        let github_url = "https://raw.githubusercontent.com/nathangavenski/nathangavenski.github.io/refs/heads/master/src/assets/CV.pdf"
        cv_url += github_url + "#pagemode=none&zoom=page-width"

        this.state = {
            cv_url,
            github_url,
            loading: false
        };
    }

    download = () => {
        this.setState({loading: true});
        const link = document.createElement("a");
        link.href = this.state.github_url;
        link.click();
        this.setState({loading: false});
    }

    render = () => {
        const {cv_url, loading} = this.state
        return template(cv_url, loading, this.download);
    }
}

export default Awards;
