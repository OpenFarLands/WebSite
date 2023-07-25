import React from "react";
import main_screen from "../img/main.jpg"

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};

	}

	render() {
		return (
            <div class="flex justify-center pt-5 px-5">
                <div class="max-w-4xl bg-white border border-gray-200 rounded-lg shadow">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank">
                        <img class="rounded-t-lg" src={main_screen} alt="main" />
                    </a>
                    <div class="p-5">
                        <p>
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">Фарлендс - </h5>
                        </p>

                        <p class="mb-3 font-normal text-gray-700">полностью ванильный сервер бедрока без доната и прочих команд которые могут помешать вам насладиться ванильным выживанием с друзьями и просто случайными игроками.</p>

                        <p class="mb-3 font-normal text-gray-700">На сервере установлена сложная сложность, а так же разрешен гриф, что значительно усложнит ваш игровой процесс, зато сделает его более динамичным и увлекательным.</p>

                        <p class="mb-3 font-normal text-gray-700">Не смотря на гриферов и отсутствие приватов - вы можете дать волю фантазии, и построить поистине красивые и уникальные постройки. Главное не забывать отходить подальше от спавна и носить головы мобов.</p>
                    </div>
                </div>
            </div>
		);
	}
}

export default MainPage;
