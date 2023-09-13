import React from "react";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}


    year = new Date().getFullYear()

    emoji = ["🕊️", "✌️", "❤️", "©"]

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
      

	render() {
		return (
			<footer class="py-2 px-2 flex items-center justify-between bg-white overflow-hidden" style={{boxShadow: "1px 1px 3px #F4AAB9" }}>
                <p class="py-1">
                    {this.emoji[this.getRandomInt(0, 3)]} FarLands | 2021 - {this.year} | All rights not reserved. | We're on <a href="https://mineserv.top/farlands">MineServ</a>!
                </p>
            </footer>
		);
	}
}

export default Footer;
