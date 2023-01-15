import React from "react";
import FooterLogo from "../../images/footer.png";
import "./footer.css";

const Footer = () => {
	return (
		<div className="d-flex footer">
			<div className="footer-left">
				<img src={FooterLogo} alt="logo" />
			</div>
			<div className="footer-right">
				<div className="community me-5">
					<div className="fw-bold font-lg mb-2">Community</div>
					<div className="d-flex me-4">
						<div className="d-flex flex-column me-5">
							<span className="my-1 hover-link">Twitter</span>
							<span className="my-1 hover-link">Telegram</span>
							<span className="my-1 hover-link">Telegram CN</span>
							<span className="my-1 hover-link">Dodo</span>
						</div>
						<div className="d-flex flex-column">
							<span className="my-1 hover-link">Discord</span>
							<span className="my-1 hover-link">Youtube</span>
							<span className="my-1 hover-link">Dune Analytics</span>
							<span className="my-1 hover-link">Llama Airforce</span>
						</div>
					</div>
				</div>

				<div className="resources">
					<div className="fw-bold font-lg mb-2">Resources</div>
					<div className="d-flex resources-link">
						<div className="d-flex flex-column me-5">
							<span className="my-1 hover-link">Whitepaper</span>
							<span className="my-1 hover-link">Audits</span>
							<span className="my-1 hover-link">Events</span>
							<span className="my-1 hover-link">Contracts</span>
						</div>
						<div className="d-flex flex-column me-5">
							<span className="my-1 hover-link">Bug Bounty</span>
							<span className="my-1 hover-link">FAQ</span>
							<span className="my-1 hover-link">Integrations</span>
							<span className="my-1 hover-link">Donate</span>
						</div>
						<div className="d-flex flex-column">
							<span className="my-1 hover-link">Developer Docs</span>
							<span className="my-1 hover-link">News</span>
							<span className="my-1 hover-link">Resources</span>
							<span className="my-1 hover-link">Github</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
