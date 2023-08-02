import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    onClick() {
        const navbar = document.querySelector(".nav-bar")
        if(navbar != null){
            navbar.classList.toggle("active")
        }
    };

	render() {
		return (
            <header class="px-2 flex 2xl:items-center 2xl:justify-between bg-white h-20 shadow-sm" id="head">
                <div class="flex items-center justify-between">
                    <Link class="text-bold font-bold text-2xl text-left pl-5 head-title" to="/">FarLands</Link>
                </div>
            
                <div class="2xl:hidden flex p-4" style={{position: "absolute", right: 0}}>
                    <button onClick={this.onClick} id="menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="black" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>          
                    </button>
                </div>

                <nav class="flex items-center nav-bar">
                    <ul class="2xl:inline-flex 2xl:space-x-2 items-center block">
                        <li><Link to="/" class="text-black rounded-md px-3 py-2 text-base font-medium hover:opacity-70" onClick={this.onClick}>Главная</Link></li>
                        <li><a href="https://github.com/OpenFarLands/ServerRules" class="text-black rounded-md px-3 py-2 text-base font-medium hover:opacity-70" onClick={this.onClick}>Правила</a></li>
                        <li><Link to="contacts" class="text-black rounded-md px-3 py-2 text-base font-medium hover:opacity-70" onClick={this.onClick}>Контакты</Link></li>
                        <li><Link to="stats" class="text-black rounded-md px-3 py-2 text-base font-medium hover:opacity-70" onClick={this.onClick}>Статистика</Link></li>
                        <li><Link to="about" class="text-black rounded-md px-3 py-2 text-base font-medium hover:opacity-70" onClick={this.onClick}>О нас</Link></li>
                    </ul>
                </nav>
            </header>
		);
	}
}

export default Header;
