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
                        
                        <a href="minecraft:?addExternalServer=§a§lFarlands|far-lands.top:19132" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Зайти на сервер
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
		);
	}
}

export default MainPage;
