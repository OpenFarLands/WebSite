import React from "react";

class RulesPage extends React.Component {
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
                        <div class="px-6 py-4 hidden md:block">
                            <div class="font-bold text-xl mb-2">Запрещено:</div>
                            <ul class = "list-decimal list-inside justify-center px-6 py-4">
                                <li class="text-gray-700 text-base font-mono">использовать софт/читы/ресурс-паки для получения преимуществ в игре (а так же прикрытие таких людей, призыв к использованию софта/читов/ресурс-паков, распространение софта/читов/ресурс-паков)</li>
                                <li class="text-gray-700 text-base font-mono">использование ресурс паков для обнаружения руд/подсветки предметов ,блоков, людей, мобов через блоки(X-ray)</li>
                                <li class="text-gray-700 text-base font-mono">играть с инвиз скином </li>
                                <li class="text-gray-700 text-base font-mono">спамить в игровой чат</li>
                                <li class="text-gray-700 text-base font-mono">строить лаг машины и мешать работе сервера/администрации </li>
                                <li class="text-gray-700 text-base font-mono">дюпать вещи</li>
                                <li class="text-gray-700 text-base font-mono">использовать чит вещи а также дюпнутые вещи</li>
                                <li class="text-gray-700 text-base font-mono">обходить бан </li>
                                <li class="text-gray-700 text-base font-mono">использовать рп и софт который позволяет видеть игрока на шифте/в инвизе (хитбоксы и хп просвечивающие через стены)</li>
                                <li class="text-gray-700 text-base font-mono">абузить @a/@e/@hui и тд</li>
                                <li class="text-gray-700 text-base font-mono">рекламировать что либо без ведома администрации</li>
                                <li class="text-gray-700 text-base font-mono">скрывать нарушителей правил, мешать следствию</li>
                            </ul>

                            <div class="font-bold text-xl mb-2">Примечания: </div>
                            <ul class = "list-decimal list-inside justify-center px-6 py-4">
                                <li class="text-gray-700 text-base font-mono">администрация не несет ответственности за вещи потерянные при лагах/багов сервера</li>
                                <li class="text-gray-700 text-base font-mono">автокликер/макрос разрешено использовать только на фермах булыжника/золота/пороха/мобов, иначе приравнивается к софту(правило 1), если вас кикнул анти чит за авто клик,  понизьте интервал между кликами</li>
                                <li class="text-gray-700 text-base font-mono">фермы приравниваются к лаг-машинам если они создают лаги и убивают тпс ниже 18 (в таком случае действует правило 5)</li>
                                <li class="text-gray-700 text-base font-mono">вы имеете право не доносить на своих тиммейтов, но если админы просят вас, то обязаны предоставить всю необходимую информацию</li>
                            </ul>
                        </div>

                        <div class="px-6 py-4 block md:hidden">
                            <div class="font-mono text-base mb-2">Правилами сервера запрещается использовать читы, мешать админам и игрокам жить. Полный список правил можно узнать в нашем <a class="underline" href="https://discord.gg/mudbr8sjfU">дискорде</a> либо зайдя на сайт с более большим экраном.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
		);
	}
}

export default RulesPage;
