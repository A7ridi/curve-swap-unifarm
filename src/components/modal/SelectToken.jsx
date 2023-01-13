import React from "react";
import Modal from "./Modal";
import { BsSearch } from "react-icons/bs";
import { FaAlgolia, FaRegRegistered } from "react-icons/fa";
import { BiBitcoin } from "react-icons/bi";
import { AiFillMoneyCollect } from "react-icons/ai";
import { GiFinch } from "react-icons/gi";
import { IoLogoUsd } from "react-icons/io";

const displayCoins = [
	{ name: "AAVE", icon: <FaRegRegistered className="me-2 text-primary" /> },
	{ name: "BTC", icon: <BiBitcoin className="me-2 text-warning" /> },
	{ name: "ONE", icon: <AiFillMoneyCollect className="me-2 text-info" /> },
	{ name: "INCH", icon: <GiFinch className="me-2 text-danger" /> },
	{ name: "ALGO", icon: <FaAlgolia className="me-2 text-success" /> },
	{ name: "USDT", icon: <IoLogoUsd className="me-2" /> },
];
const allCoins = [
	{ name: "AAVE", icon: <FaRegRegistered className="me-2 text-primary" /> },
	{ name: "BTC", icon: <BiBitcoin className="me-2 text-warning" /> },
	{ name: "ONE", icon: <AiFillMoneyCollect className="me-2 text-info" /> },
	{ name: "INCH", icon: <GiFinch className="me-2 text-danger" /> },
	{ name: "ALGO", icon: <FaAlgolia className="me-2 text-success" /> },
	{ name: "USDT", icon: <IoLogoUsd className="me-2" /> },
	{ name: "USDT", icon: <IoLogoUsd className="me-2" /> },
	{ name: "USDT", icon: <IoLogoUsd className="me-2" /> },
	{ name: "USDT", icon: <IoLogoUsd className="me-2" /> },
];

const SelectToken = ({ toggleModal, setCoin = () => {} }) => {
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
					<input type="text" />
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
							className="form-check-label cursor-pointer fw-semibold"
							for="flexCheckDefault"
						>
							Hide tokens from very small pools
						</label>
					</div>
				</div>

				<div className="coins-list">
					{allCoins.map((coin) => (
						<div
							className="single-coin"
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
			</div>
		</Modal>
	);
};

export default SelectToken;
