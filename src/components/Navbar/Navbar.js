import React from "react";
import template from "./Navbar.jsx";

class Navbar extends React.Component {
	constructor() {
		super();

		this.state = {
			checked: false,
		};
	}

	setChecked = (toggleTheme) => {
		toggleTheme();
		this.setState((prevState) => ({
			checked: !prevState.checked
		}));
	}

	render = () => {
        let {checked} = this.state
		return template(
		    checked,
			this.setChecked,
		);
    }
}

export default Navbar;
