import React from "react";

class ConactsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};

	}

	render() {
		return (
            <div class = "flex justify-center py-5 px-5">
                <div class="min-w-[70%] bg-white border border-gray-200 rounded-lg shadow">
                    <div class="p-5">
                        <p>
                            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900">Наши контакты:</h5>
                        </p>
                        <ul class = "justify-center px-6 py-4 list-disc">
                            <li><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://discord.gg/mudbr8sjfU">Дискорд</a></li>
                            <li><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://t.me/farlands_offical">Телеграм канал</a></li>
                            <li><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://t.me/far_lands">Телеграм чат</a></li>
                            <li><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://github.com/OpenFarLands">Гитхаб</a></li>
                            <li><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://vk.com/public207076906">ВКонтакте</a></li>
                            <li><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://hotmc.ru/minecraft-server-213571">HotMc</a></li>
                            <li><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://mineserv.top/farlands">MineServ</a></li>
                            <li><a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.youtube.com/watch?v=6WsIVjlq-p4">Одноклассники</a></li>
                        </ul>
                    </div>
                </div>
            </div>
		);
	}
}

export default ConactsPage;
