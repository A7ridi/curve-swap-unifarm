import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { logoImg } from "../layout/logo";
import Stepper from "../stepper/Stepper";
import Modal from "./Modal";
import { AiFillLock, AiOutlineWifi } from "react-icons/ai";
import { DiDropbox } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { BsCoin } from "react-icons/bs";
import { SiHyperledger } from "react-icons/si";

const walletCoin = [
	{
		name: "Trezor",
		icon: <AiFillLock size="2.6rem" className="card-logo text-primary" />,
	},
	{
		name: "Ledger",
		icon: <SiHyperledger size="2.6rem" className="card-logo text-info" />,
	},
	{
		name: "Coinbase Wallet",
		icon: <BsCoin size="2.6rem" className="card-logo text-danger" />,
	},
	{ name: "Fortmatic", icon: <FcGoogle size="2.6rem" className="card-logo" /> },
	{
		name: "WalletConnect",
		icon: <AiOutlineWifi size="2.6rem" className="card-logo text-success" />,
	},
	{ name: "Portis", icon: <DiDropbox size="2.6rem" className="card-logo" /> },
];

const ConnectWallet = ({ type = "navbar" }) => {
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => setShowModal(!showModal);
	return (
		<>
			<button
				className={`px-3 py-1 d-flex align-items-center connect-wallet fw-semibold ${
					type === "swap" ? "w-100 justify-content-center" : ""
				}`}
				onClick={toggleModal}
				style={{
					background: `${type === "swap" && "#1763fd"}`,
					color: `${type === "swap" && "#fff"}`,
				}}
			>
				{type === "navbar" && (
					<BsFillCircleFill size="13px" className="me-3 text-danger" />
				)}
				Connect Wallet
			</button>

			{showModal && (
				<Modal onModalTapped={toggleModal}>
					<div className="connect-wallet-modal">
						<div className="connect-wallet-left">
							<img src={logoImg} alt="logo" width={150} />
							<span>Connect your wallet</span>
							<span>
								Connecting your wallet is like “logging in” to Web3. Select your
								wallet from the options to get started.
							</span>
							<Stepper />
						</div>
						<div className="connect-wallet-right">
							<div className="connect-right-top">
								<div>Available wallets (7)</div>
								<span className="cursor-pointer" onClick={toggleModal}>
									&times;
								</span>
							</div>
							<hr />
							<div className="connect-right-middle">
								{walletCoin.map((coin) => (
									<div className="card cursor-pointer">
										{coin.icon}
										<span>{coin.name}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default ConnectWallet;
