import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Pools from "./components/pools/Pools";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import AppNavbar from "./components/layout/Navbar";

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
