import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import Modal from "./Modal";
import FilterSvg from "../../images/filtersvg.svg";

const SettingModal = ({ type = "filter", size = "12px" }) => {
	const [showModal, setShowModal] = useState(false);
	const [number, setNumber] = useState("");
	const toggleModal = () => setShowModal(!showModal);
	return (
		<>
			{type === "filter" ? (
				<img
					src={FilterSvg}
					className="cursor-pointer"
					alt="filter"
					width={25}
					onClick={toggleModal}
				/>
			) : (
				<AiOutlineSetting
					className="cursor-pointer"
					size={size}
					onClick={toggleModal}
				/>
			)}

			{showModal && (
				<Modal onModalTapped={toggleModal}>
					<div className="advance-settings">
						<div className="setting-header px-3 mt-3 d-flex justify-content-between">
							<span className="advance-setting-text">Advanced Settings</span>
							<span
								onClick={toggleModal}
								style={{ fontSize: 25, marginTop: -10 }}
								className="cursor-pointer"
							>
								&times;
							</span>
						</div>

						<div className="setting-body px-3 mt-4">
							<div className="d-flex align-items-center">
								<span className="me-2 max-slippage">Max Slippage</span>
								<span className="font-sm fw-semibold price-info tooltip-info">
									i
									<span
										className="tooltiptext"
										style={{ marginLeft: "-6rem", width: "200px" }}
									>
										Maximum difference between expected price of the trade,
										versus the price when the trade is executed
									</span>
								</span>
							</div>

							<div className="radio-buttons-settings">
								<div className="form-check cursor-pointer">
									<input
										className="form-check-input cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
									<label
										className="form-check-label cursor-pointer"
										for="flexRadioDefault1"
									>
										0.1%
									</label>
								</div>
								<div className="form-check cursor-pointer">
									<input
										className="form-check-input cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault2"
									/>
									<label
										className="form-check-label cursor-pointer"
										for="flexRadioDefault2"
									>
										0.5%
									</label>
								</div>
								<div className="form-check custom-input-setting">
									<input
										className="form-check-input cursor-pointer"
										type="radio"
										name="flexRadioDefault"
										id="flexRadioDefault1"
									/>
									<label className="form-check-label" for="flexRadioDefault1">
										<input
											type="number"
											className="radio-input-setting"
											value={number}
											onChange={(e) => setNumber(e.target.value)}
											placeholder="Custom"
										/>{" "}
										%
									</label>
								</div>

								<div className="discard-save-btn">
									<button className="discard-btn" onClick={toggleModal}>
										Discard
									</button>
									<button className="save-btn" onClick={toggleModal}>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default SettingModal;
