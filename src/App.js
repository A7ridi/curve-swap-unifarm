import "./App.css";
import AppNavbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Pools from "./components/Pools";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<Router>
			<AppNavbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/pools" element={<Pools />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
