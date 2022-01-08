import React from "react";
import template from "./Navbar.jsx";

class Navbar extends React.Component {
	constructor() {
		super();

		this.state = {
			menu: "home",
			checked: false,
		};
	}

	setActive = (e) => {
		console.log(e.target.text.toLowerCase())
		this.setState({
			menu: e.target.text.toLowerCase()
		});
	}

	setChecked = (toggleTheme) => {
		toggleTheme();
		this.setState((prevState) => ({
			checked: !prevState.checked
		}));
	}

	render = () => {
		return template(
			this.state.checked,
			this.setChecked
		);
	}
}

export default Navbar;
