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
import NavbarDropdown from "../dropdown/NavbarDropdown";
import ConnectWallet from "../modal/ConnectWallet";
import { GiHummingbird } from "react-icons/gi";
import { sidebarLinks, tabsLink } from "./Links";

function AppNavbar() {
	return (
		<>
			{["sm"].map((expand) => (
				<Navbar
					key={expand}
					bg="light"
					expand={expand}
					className="d-flex align-items-center justify-content-center position-fixed navbar-view"
					style={{ zIndex: 1 }}
				>
					<div className="d-flex flex-column navbar-header">
						<Nav className="flex-grow-1 topbar-web d-flex justify-content-between mx-2 pt-1">
							<div className="d-flex">
								<span className="fw-semibold me-4 font-sm">
									Total Deposits: $3,647,302,178
								</span>
								<span className="fw-semibold font-sm">
									Daily Volume: $336,013,931
								</span>
							</div>

							<div className="d-flex align-items-center">
								<Link to="/" className="text-decoration-none text-dark">
									<span className="fw-semibold me-3 font-sm visit-old-ui">
										Visit Old UI
									</span>
								</Link>
								<Link to="/" className="text-decoration-none text-dark">
									<span className="fw-semibold me-4 font-sm visit-old-ui">
										Governance
									</span>
								</Link>
								<GiHummingbird
									size="1.3rem"
									className="me-4 cursor-pointer hover-bird"
								/>
								<AiOutlineTwitter
									size="1.3rem"
									className="me-3 cursor-pointer social-links"
								/>
								<FaTelegramPlane
									size="1.3rem"
									className="me-3 cursor-pointer social-links"
								/>
								<FaGithub
									size="1.3rem"
									className="me-3 cursor-pointer social-links"
								/>
								<FaDiscord
									size="1.3rem"
									className="me-3 cursor-pointer social-links"
								/>
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
														? "bg-dark p-2 text-light text-decoration-none fw-semibold font-sm"
														: "text-dark bg-light text-decoration-none fw-semibold font-sm"
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

								<div className="d-flex justify-content-between mt-2 mb-1">
									<Navbar.Toggle
										aria-controls={`offcanvasNavbar-expand-${expand}`}
									/>
									<span className="fw-semibold topbar-mobile">
										<NavbarDropdown />
									</span>
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
										<Nav className="justify-content-start flex-grow-1 pe-3 topbar-mobile position-relative">
											{sidebarLinks.map((item) => (
												<NavLink
													to={item.link}
													className={({ isActive }) =>
														isActive
															? "bg-dark p-2 text-light text-decoration-none fw-semibold font-sm"
															: "text-dark p-2 bg-light text-decoration-none fw-semibold font-sm"
													}
												>
													{item.name}
												</NavLink>
											))}

											<hr style={{ margin: "0px" }} />

											<div className="px-2">
												<div className="d-flex flex-column my-2">
													<span className="font-lg fw-semibold">TVL</span>
													<span className="font-sm">$3,471,853,145</span>
												</div>
												<div className="d-flex flex-column">
													<span className="font-lg fw-semibold">
														Daily Volume
													</span>
													<span className="font-sm">$150,876,939</span>
												</div>

												<div className="mt-2 mb-4">
													<img src={sheepImg} alt="sheep" width={40} />
												</div>
											</div>

											<div className="connect-wallet-sidebar">
												<ConnectWallet />
											</div>
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
