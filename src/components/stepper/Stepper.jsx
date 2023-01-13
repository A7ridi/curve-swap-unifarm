import React from "react";
import "./stepper.css";

const Stepper = () => {
	return (
		<div className="stepper-wrapper">
			<div className="stepper-item completed">
				<div className="step-counter"></div>
			</div>
			<div className="stepper-item">
				<div className="step-counter"></div>
			</div>
			<div className="stepper-item">
				<div className="step-counter"></div>
			</div>
		</div>
	);
};

export default Stepper;
