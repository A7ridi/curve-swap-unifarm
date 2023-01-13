import React, { useState } from "react";
import "./home.css";
import ConnectWallet from "./modal/ConnectWallet";
import { MdSwapVert } from "react-icons/md";
import SettingModal from "./modal/SettingModal";
import { GiFinch } from "react-icons/gi";
import { FaRegRegistered } from "react-icons/fa";
import SelectToken from "./modal/SelectToken";

const Home = () => {
	const [firstCoin, setFirstCoin] = useState({
		icon: <GiFinch className="me-2" />,
		name: "ARBT",
	});
	const [secondCoin, setSecondCoin] = useState({
		icon: <FaRegRegistered className="me-2" />,
		name: "AAVE",
	});

	const [firstCoinModal, setFirstCoinModal] = useState(false);
	const [secondCoinModal, setSecondCoinModal] = useState(false);

	const toggleFirstModal = () => setFirstCoinModal(!firstCoinModal);
	const toggleSecondModal = () => setSecondCoinModal(!secondCoinModal);

	const swapCoins = () => {
		setFirstCoin(secondCoin);
		setSecondCoin(firstCoin);
	};

	return (
		<div className="home-container">
			<div className="swap-card">
				<div
					className="d-flex justify-content-between p-3"
					style={{ background: "#e9e9e9" }}
				>
					<span className="fw-bold" style={{ fontSize: 20 }}>
						Swap
					</span>

					<SettingModal type="filter" />
				</div>

				<div className="swap-card-body">
					<div className="swap-first-input">
						<input type="number" placeholder="0.00" />
						<button
							onClick={toggleFirstModal}
							className="d-flex align-items-center"
						>
							{firstCoin.icon}
							{firstCoin.name}
						</button>
						<span className="font-sm">≈ $1.00</span>
					</div>
					{firstCoinModal && (
						<SelectToken
							toggleModal={toggleFirstModal}
							setCoin={setFirstCoin}
						/>
					)}

					<div className="d-flex justify-content-center">
						<MdSwapVert
							className="cursor-pointer"
							size="1.5rem"
							onClick={swapCoins}
						/>
					</div>

					<div className="swap-second-input mt-2">
						<input type="number" placeholder="0.00" />
						<button
							onClick={toggleSecondModal}
							className="d-flex align-items-center"
						>
							{secondCoin.icon}
							{secondCoin.name}
						</button>
						<span className="font-sm">≈ $1.50</span>
					</div>
					{secondCoinModal && (
						<SelectToken
							toggleModal={toggleSecondModal}
							setCoin={setSecondCoin}
						/>
					)}

					<div className="d-flex justify-content-between my-2">
						<span className="font-sm fw-semibold">
							Exchange rate (incl. fees):
						</span>
						<div className="d-flex flex-column align-items-end">
							<div className="d-flex">
								<span className="me-1 font-sm">USDT/ETH</span>
								<span className="font-sm fw-semibold">0.00076021</span>
							</div>
							<div className="d-flex">
								<span className="me-1 font-sm">ETH/USDT</span>
								<span className="font-sm fw-semibold">1,315.41852284</span>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-between my-2">
						<span className="font-sm fw-semibold">Price impact:</span>
						<div className="d-flex align-items-center">
							<span className="me-2 font-sm">0%</span>
							<span className="font-sm fw-semibold price-info tooltip-info">
								i
								<span
									className="tooltiptext"
									style={{ marginLeft: "-6.5rem", width: "200px" }}
								>
									Price change in the market that happens when a trader buys or
									sells an asset
								</span>
							</span>
						</div>
					</div>

					<div className="d-flex justify-content-between my-2">
						<span className="font-sm fw-semibold">Trade routed through:</span>
						<div className="d-flex flex-column align-items-end">
							<span className="me-1 font-sm fw-semibold">frax</span>
							<span className="font-sm fw-semibold">ETH/FRAX</span>
						</div>
					</div>

					<div className="d-flex justify-content-between my-2">
						<span className="font-sm fw-semibold">Slippage tolerance:</span>
						<span className="font-sm d-flex align-items-center">
							<span className="me-1">0.1%</span>
							<SettingModal type="setting" size="15px" />
						</span>
					</div>

					<div className="mt-4">
						<ConnectWallet type="swap" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
