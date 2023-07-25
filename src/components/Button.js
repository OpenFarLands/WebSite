import React from "react";

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "button",
		};

        this.onClick = this.onClick.bind(this);
	}

	onClick() {
        this.setState({
			click: this.state.click + 1,
		});
    }

	render() {
		return (
			<button onClick={this.onClick}>
				{this.state.text}
			</button>
		);
	}
}

Button.defaultProps = {
	text: "button",
};

export default Button;
