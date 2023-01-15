import React, { useState } from "react";
import Modal from "./Modal";
import { BsSearch } from "react-icons/bs";
import { FaAlgolia, FaRegRegistered } from "react-icons/fa";
import { BiBitcoin, BiRadar } from "react-icons/bi";
import { AiFillMoneyCollect } from "react-icons/ai";
import { GiFinch } from "react-icons/gi";
import { IoLogoUsd } from "react-icons/io";
import { SiDogecoin, SiXrp } from "react-icons/si";

const displayCoins = [
	{ name: "AAVE", icon: <FaRegRegistered className="me-2 text-primary" /> },
	{ name: "BTC", icon: <BiBitcoin className="me-2 text-warning" /> },
	{ name: "ONE", icon: <AiFillMoneyCollect className="me-2 text-info" /> },
	{ name: "INCH", icon: <GiFinch className="me-2 text-danger" /> },
	{ name: "ALGO", icon: <FaAlgolia className="me-2 text-success" /> },
	{ name: "USDT", icon: <IoLogoUsd className="me-2" /> },
];
const allCoins = [
	{
		title: "Aave Token",
		name: "AAVE",
		icon: <FaRegRegistered className="me-2 text-primary" />,
	},
	{
		title: "Bitcoin",
		name: "BTC",
		icon: <BiBitcoin className="me-2 text-warning" />,
	},
	{
		title: "Harmony",
		name: "ONE",
		icon: <AiFillMoneyCollect className="me-2 text-info" />,
	},
	{
		title: "1Inch",
		name: "INCH",
		icon: <GiFinch className="me-2 text-danger" />,
	},
	{
		title: "Algorand",
		name: "ALGO",
		icon: <FaAlgolia className="me-2 text-success" />,
	},
	{ title: "Thether USD", name: "USDT", icon: <IoLogoUsd className="me-2" /> },
	{ title: "Dogecoin", name: "DOGE", icon: <SiDogecoin className="me-2" /> },
	{ title: "Ripple Coin", name: "XRP", icon: <SiXrp className="me-2" /> },
	{ title: "Cardano", name: "ADA", icon: <BiRadar className="me-2" /> },
];

const SelectToken = ({ toggleModal, setCoin = () => {} }) => {
	const [search, setSearch] = useState("");

	const filterCoins = allCoins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<Modal onModalTapped={toggleModal}>
			<div className="select-token">
				<div className="select-token-header">
					<span className="header-text">Select a token</span>
					<span className="close-btn" onClick={toggleModal}>
						&times;
					</span>
				</div>

				<div className="search-input">
					<BsSearch size="1rem" />
					<input
						type="text"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
				</div>

				<div className="coins-box">
					{displayCoins.map((coin) => (
						<div
							className="each-coin"
							onClick={() => {
								setCoin(coin);
								setTimeout(() => {
									toggleModal();
								}, 10);
							}}
						>
							{coin.icon}
							{coin.name}
						</div>
					))}
				</div>

				<div className="my-3">
					<div className="form-check">
						<input
							className="form-check-input cursor-pointer"
							type="checkbox"
							value=""
							id="flexCheckDefault"
						/>
						<label
							className="form-check-label cursor-pointer fw-semibold hide-token-text"
							for="flexCheckDefault"
						>
							Hide tokens from very small pools
						</label>
					</div>
				</div>

				<div className="coins-list">
					{filterCoins.length === 0 && (
						<div className="empty-coins">No coins found</div>
					)}
					{filterCoins.map((coin) => (
						<div
							className="single-coin"
							onClick={() => {
								setCoin(coin);
								setTimeout(() => {
									toggleModal();
								}, 10);
							}}
						>
							<div className="d-flex align-items-center">
								<span className="me-1">{coin.icon}</span>
								<div className="d-flex flex-column">
									<span
										className="text-secondary font-xs"
										style={{ marginBottom: "-5px" }}
									>
										{coin.title}
									</span>
									<span className="fw-semibold font-sm">{coin.name}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Modal>
	);
};

export default SelectToken;
