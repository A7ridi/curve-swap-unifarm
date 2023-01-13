import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { logoImg, sheepImg } from "./logo";
import "./navbar.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import NavbarDropdown from "./dropdown/NavbarDropdown";
import ConnectWallet from "./modal/ConnectWallet";

const tabsLink = [
	{
		name: "SWAP",
		link: "/",
	},
	{
		name: "POOLS",
		link: "/pools",
	},
	{
		name: "DASHBOARD",
		link: "/dashboard",
	},
];

function AppNavbar() {
	return (
		<>
			{["sm"].map((expand) => (
				<Navbar
					key={expand}
					bg="light"
					expand={expand}
					className="d-flex align-items-center justify-content-center w-100 position-fixed"
					style={{ zIndex: 1 }}
				>
					<div className="d-flex flex-column" style={{ width: "89%" }}>
						<Nav className="flex-grow-1 topbar-web d-flex justify-content-between mx-2 pt-1">
							<div className="d-flex">
								<span className="fw-semibold me-4">
									Total Deposits: $3,647,302,178
								</span>
								<span className="fw-semibold">Daily Volume: $336,013,931</span>
							</div>

							<div className="d-flex align-items-center">
								<span className="fw-semibold me-2">Visit Old UI</span>
								<span className="fw-semibold me-4">Governance</span>
								<AiOutlineTwitter size="1.3rem" className="me-3" />
								<FaTelegramPlane size="1.3rem" className="me-3" />
								<FaGithub size="1.3rem" className="me-3" />
								<FaDiscord size="1.3rem" className="me-3" />
							</div>
						</Nav>

						<hr className="topbar-web" />

						<div>
							<Container fluid>
								<div className="d-flex justify-content-between align-items-center topbar-web">
									<div
										className="d-flex align-items-center"
										style={{ gap: 15 }}
									>
										<Link to="/" className="text-decoration-none">
											<Navbar.Brand className="topbar-web d-flex">
												<img
													src={logoImg}
													alt="logo"
													className="me-2"
													height="30"
													width={30}
												/>
												Curve
											</Navbar.Brand>
										</Link>

										{tabsLink.map((item) => (
											<NavLink
												to={item.link}
												className={({ isActive }) =>
													isActive
														? "bg-dark p-2 text-light text-decoration-none fw-semibold"
														: "text-dark bg-light text-decoration-none fw-semibold"
												}
											>
												{item.name}
											</NavLink>
										))}
									</div>

									<div className="d-flex" style={{ gap: 15 }}>
										<NavbarDropdown />

										<ConnectWallet />
									</div>
								</div>

								<div className="d-flex justify-content-between mt-3">
									<Navbar.Toggle
										aria-controls={`offcanvasNavbar-expand-${expand}`}
									/>
									<span className="fw-semibold topbar-mobile">Hello Bro</span>
								</div>

								<Navbar.Offcanvas
									id={`offcanvasNavbar-expand-${expand}`}
									aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
									placement="start"
								>
									<Offcanvas.Header closeButton>
										<Offcanvas.Title
											id={`offcanvasNavbarLabel-expand-${expand}`}
										>
											<div className="d-flex">
												<img
													src={logoImg}
													alt="logo"
													className="me-2"
													height="30"
													width={30}
												/>
												Curve
											</div>
										</Offcanvas.Title>
									</Offcanvas.Header>

									<Offcanvas.Body>
										<Nav className="justify-content-start flex-grow-1 pe-3 topbar-mobile">
											<Nav.Link href="#action1">Swap</Nav.Link>
											<Nav.Link href="#action2">Pools</Nav.Link>
											<Nav.Link href="#action2">Dashboard</Nav.Link>
											<Nav.Link href="#action2">Visit Old UI</Nav.Link>
											<Nav.Link href="#action2">Governance</Nav.Link>
											<Nav.Link href="#action2">Community</Nav.Link>
											<Nav.Link href="#action2">Resources</Nav.Link>
											<Nav.Link href="#action2">Mode</Nav.Link>

											<hr />

											<div>
												<span>TVL</span>
												<span>$3,471,853,145</span>
											</div>
											<div>
												<span>Daily Volume</span>
												<span>$150,876,939</span>
											</div>

											<div>
												<img src={sheepImg} alt="sheep" />
											</div>

											<button>Connect Wallet</button>
										</Nav>
									</Offcanvas.Body>
								</Navbar.Offcanvas>
							</Container>
						</div>
					</div>
				</Navbar>
			))}
		</>
	);
}

export default AppNavbar;
