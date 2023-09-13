import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import MainPage from "./pages/Main";
import RulesPage from "./pages/Rules";
import ConactsPage from "./pages/Contacts";
import StatsPage from "./pages/Stats";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFound";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			helpText: "Help text",
			userData: "",
		};

	}

	render() {
		return (
            <div class="page">
                <Header />

                <main class="mb-5">
                    <Routes>
                        <Route path="/" element={<MainPage />}/>
                        <Route path="/rules" element={<RulesPage />}/>
                        <Route path="/contacts" element={<ConactsPage />}/>
                        <Route path="/stats" element={<StatsPage />}/>
                        <Route path="/about" element={<AboutPage />}/>
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
		);
	}
}

export default App;
