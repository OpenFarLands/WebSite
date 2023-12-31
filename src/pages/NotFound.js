import React from "react";
import screen_404 from "../img/death_screen.png"
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};

	}

	render() {
		return (
            <div class = "flex justify-center pt-5 px-5">
                <div class="max-w-xl bg-white border border-gray-200 rounded-lg shadow">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank">
                        <img class="rounded-t-lg" src={screen_404} alt="404" />
                    </a>
                    <div class="p-5">
                        <p>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">404</h5>
                        </p>
                        <p class="mb-3 font-normal text-gray-700">Здесь ничего нет, хотя, как тут может ничего не быть если тут это есть.</p>
                        <Link to="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Вернуться туда где что-то есть.
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
		);
	}
}

export default NotFoundPage;
