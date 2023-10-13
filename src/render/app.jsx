import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Weather from "./pages/Weather";
import Telemetry from "./pages/Telemetry";
import Strategy from "./pages/Strategy";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import InfoBar from "./components/InfoBar";

import store from "./store/store";
import {Provider} from "react-redux";
import DataHandler from "./store/DataHandler";

export default function App() {
	return (
		<Provider store={store}>
			<DataHandler />
			<Router>
				<NavBar />
				<SideBar />
				<InfoBar />
				<main>
					<Routes>
						<Route path="/main_window" element={<Weather />} />
						<Route path="/weather" element={<Weather />} />
						<Route path="/strategy" element={<Strategy />} />
						<Route path="/telemetry" element={<Telemetry />} />
					</Routes>
				</main>
			</Router>
		</Provider>
	);
}
