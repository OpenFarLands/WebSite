import React from "react";

class AboutPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};

	}   

	render() {
		return (
            <div class = "flex justify-center pt-5 px-5">
                <div class="max-w-auto bg-white border border-gray-200 rounded-lg shadow">
                    <div class="p-5">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Наш состав:</div>
                            <ul class = "list-disc list-inside justify-center font-normal text-gray-700 mb-3 ">
                                <li><b>Пророк</b>: создатель сервера, тех админ, роняет сервера по утрам.</li>
                                <li><b>Дефф</b>: модератор, гроза нарушителей правил.</li>
                                <li><b>Булат</b>: модератор, шарит за все баги и рофлы майнкрафта.</li>
                                <li><b>Винки</b>: тех спец, помогал и помогает серверу в трудные времена.</li>
                            </ul>

                            <div class="font-bold text-xl mb-2">О нас:</div>
                            <p class="mb-3 font-normal text-gray-700">
                                Мы, админы, модераторы, команда фар. С 16 июня 2021 года делаем сервер для игроков: стабильный, удобный, без доната. Сервер работает в минус, добровольные донаты едва отбивают затраты - мы независимы от донатеров и готовы работать на интересы игроков! Все мы люди, такие же как вы, и все мы хотим мира во всем мире.
                            </p>

                            <div class="font-bold text-xl mb-2">Поддержать нас:</div>
                            <ul class = "justify-center list-disc list-inside font-mono mb-3 ">
                                <li style={{wordBreak: "break-all"}}><b>TON</b>: EQDOREq07obNZqMHbVheQXTz4S_j_tVGmhF9FUAkXoP_WWEt</li>
                                <li><b>Тинькофф</b>: 2200700839133724</li>
                                <li><b>QIWI</b>: <a href="https://qiwi.com/n/AMAZINGPUNK"><u>AMAZINGPUNK</u></a></li>
                                <li><b>МоноБанк</b>: 4441111131862678</li>
                                <li><b>Играть</b>: Играть у нас - бесплатно, а админам приятно!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default AboutPage;
