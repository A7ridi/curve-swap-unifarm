import React, { useState } from "react";
import { AiTwotoneAudio, AiTwotoneEdit } from "react-icons/ai";
import {
	FaEthereum,
	FaFantasyFlightGames,
	FaRegRegistered,
} from "react-icons/fa";
import { GiFinch } from "react-icons/gi";
import { SiBinance } from "react-icons/si";
import { TbPolygon } from "react-icons/tb";
import Select from "react-select";
import "./navDropdown.css";

const data = [
	{
		value: 2,
		text: "Arbitrum",
		icon: <GiFinch className="me-2" />,
	},
	{
		value: 3,
		text: "Avalanche",
		icon: <FaRegRegistered className="me-2" />,
	},
	{
		value: 4,
		text: "BNB Chain",
		icon: <SiBinance className="me-2" />,
	},
	{
		value: 5,
		text: "Eth Rinkeby",
		icon: <FaEthereum className="me-2" />,
	},
	{
		value: 6,
		text: "Fantom",
		icon: <FaFantasyFlightGames className="me-2" />,
	},
	{
		value: 7,
		text: "Harmony",
		icon: <AiTwotoneAudio className="me-2" />,
	},
	{
		value: 8,
		text: "POA Network",
		icon: <AiTwotoneEdit className="me-2" />,
	},
	{
		value: 9,
		text: "Polygon",
		icon: <TbPolygon className="me-2" />,
	},
];

const customStyles = {
	container: () => ({
		height: 25,
		width: "220px",
		zIndex: "99",
	}),
	control: (provided) => ({
		...provided,
		display: "flex",
		maxHeight: 40,
		minHeight: 40,
		overflow: "auto",
		borderRadius: 0,
		backgroundColor: "transparent",
		cursor: "pointer",
		"&:hover": {
			borderColor: "#dadaff",
			color: "#3a4c96",
			background: "#dadaff",
		},
	}),
	menuList: () => ({
		maxHeight: "500px",
		overflowY: "auto",
		backgroundColor: "rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important",
	}),
};

const NavbarDropdown = () => {
	const [selectedOption, setSelectedOption] = useState({
		value: 1,
		text: "Ethereum",
		icon: <FaEthereum className="me-2" />,
	});

	const handleChange = (e) => {
		setSelectedOption(e);
	};
	return (
		<>
			<Select
				styles={customStyles}
				placeholder="Select Option"
				value={selectedOption}
				options={data}
				onChange={handleChange}
				getOptionLabel={(e) => (
					<div style={{ display: "flex", alignItems: "center" }}>
						{e.icon}
						<span style={{ marginLeft: 5 }}>{e.text}</span>
					</div>
				)}
				components={{
					IndicatorSeparator: () => null,
				}}
			/>
		</>
	);
};

export default NavbarDropdown;
