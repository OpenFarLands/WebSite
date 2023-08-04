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
                        <div class="px-6 py-4">
                            <div class="font-mono text-base mb-2">Правила сервера можно узнать <a class="underline" href="https://github.com/OpenFarLands/ServerRules">здесь</a>.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
		);
	}
}

export default RulesPage;
