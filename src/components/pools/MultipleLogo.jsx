import React from "react";
import { BiBitcoin } from "react-icons/bi";
import { FaAlgolia, FaRegRegistered } from "react-icons/fa";
import { GiFinch } from "react-icons/gi";

const MultipleLogo = () => {
	return (
		<div className="mulitple-logo">
			<div className="first-row">
				<FaRegRegistered className="text-primary" />
				<BiBitcoin className="text-warning" />
			</div>
			<div className="second-row">
				<GiFinch className="text-danger" />
				<FaAlgolia className="text-success" />
			</div>
		</div>
	);
};

export default MultipleLogo;
