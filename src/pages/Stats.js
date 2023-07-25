import React from "react";

class StatsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};

	}

	render() {
		return (
            <div class = "flex justify-center pt-5 ">
                <div class="w-[90%] h-96 rounded overflow-hidden shadow-md">
                    <iframe class="px-4 py-2 z-0" title="Stats" src="https://monitoring.mineserv.top/?id=1154&color=00bd6e&params=online&bordered" width="100%" height="85%" frameborder="0"></iframe>

                    <script src="https://mineserv.top/widgets.js"></script>

                    <button class="hover:shadow text-black font-bold py-2 px-4 my-2 mx-4 rounded border border-slate-600">
                        Мониторинг аптайма (скоро)
                    </button>
                </div>
            </div>
		);
	}
}

export default StatsPage;
