import React from "react";
import { allCoins } from "../pools/AllCoins";
import MultipleLogo from "../pools/MultipleLogo";
import "../pools/pools.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./dashboard.css";

const Dashboard = () => {
	return (
		<div className="home-container">
			<div className="pools-card">
				<div className="px-3 pt-4 pb-2 d-flex dashboard-top app-bg">
					<div className="total-balances">
						<span className="fw-bold font-lg mb-2">Total Balances</span>
					</div>
					<div className="vertical-line"></div>
					<div className="total-vecrv">
						<div className="fw-bold font-lg">Total veCRV</div>
						<div className="font-sm">
							veCRV <span className="fw-semibold">0</span>
						</div>
						<div className="font-sm">
							Locked for <span className="fw-semibold">0</span> days
						</div>
						<div className="font-sm d-flex align-items-center mt-2">
							veCRV rewards:
							<span className="fw-semibold d-flex align-items-center ms-1">
								0.00 3crv
								<span className="font-sm fw-semibold price-info tooltip-info mx-1">
									i
									<span
										className="tooltiptext"
										style={{ marginLeft: "-6.5rem", width: "200px" }}
									>
										Trading fees distributed to CRV lockers
									</span>
								</span>
							</span>
						</div>
						<button className="btn btn-primary px-5 my-2 w-75">
							Claim LP Rewards
						</button>
					</div>
					<div className="vertical-line"></div>
					<div className="view-address">
						<div className="font-lg fw-bold">View Address</div>
						<input type="text" placeholder="0x..." />
					</div>
				</div>

				<div className="my-2 d-flex p-3 mx-3">
					<div className="daily-profits">
						<div className="fw-bold mb-1">Total Daily Profits</div>
						<div className="d-flex justify-content-between bottom-line mb-1">
							<span>Base</span>
							<span>0</span>
						</div>

						<div className="d-flex justify-content-between bottom-line mb-1">
							<span>CRV</span>
							<span>0</span>
						</div>
						<div className="d-flex justify-content-between">
							<span className="fw-semibold">USD Total</span>
							<span className="fw-semibold">≈ $0</span>
						</div>
					</div>

					<div className="claimable-tokens">
						<div className="fw-bold mb-1">Claimable Tokens</div>
						<div className="d-flex justify-content-between bottom-line mb-1">
							<span>CRV</span>
							<span>0</span>
						</div>
						<div className="d-flex justify-content-between">
							<span className="fw-semibold">USD Total</span>
							<span className="fw-semibold">≈ $0</span>
						</div>
					</div>
				</div>

				<div className="coins-table px-2">
					<table class="table">
						<thead>
							<tr className="app-bg">
								<th
									scope="col"
									className="align-middle"
									style={{ width: "40%" }}
								>
									Pool
								</th>
								<th
									scope="col d-flex flex-column"
									style={{ width: "30%" }}
									className="align-middle"
								>
									<div className="d-flex align-items-center base-vapy">
										Base vAPY
										<span className="font-sm fw-semibold price-info tooltip-info mx-1 base-vapy">
											i
											<span
												className="tooltiptext base-vapy"
												style={{ marginLeft: "-6.5rem", width: "200px" }}
											>
												Variable APY based on today's trading activity
											</span>
										</span>
									</div>
									<div className="d-flex align-items-center">
										<div className="base-vapy d-flex align-items-center">
											Rewards tAPR
											<span className="font-sm fw-semibold price-info tooltip-info mx-1 base-vapy">
												i
												<span
													className="tooltiptext base-vapy"
													style={{ marginLeft: "-6.5rem", width: "200px" }}
												>
													Token ARR based on current prices of tokens and
													rewarsd rates
												</span>
											</span>
											(CRV
										</div>
										<span> + Incentives)</span>
									</div>
								</th>
								<th scope="col" className="align-middle">
									Balance
								</th>
								<th scope="col" className="align-middle">
									<div className="d-flex flex-column">
										<span>USD Profits</span>
										<span>CRV Profits</span>
									</div>
								</th>
								<th scope="col" className="align-middle">
									Claimable Tokens
								</th>
							</tr>
						</thead>
						<tbody>
							{allCoins.slice(0, 3).map((coin) => {
								return (
									<tr className="coin-table-data">
										<td className="d-flex align-items-center">
											<div className="me-2">
												<MultipleLogo />
											</div>
											<div className="">
												<div className="fw-semibold">3Pool</div>
												<div className="font-sm">{coin.address}</div>
												<div className="font-sm">{coin.related}</div>
											</div>
										</td>
										<td className="align-middle">
											<div className="d-flex flex-column">
												{coin.base}
												<div>
													0.33%
													<HiOutlineArrowNarrowRight className="mx-2" />
													0.85%
												</div>
											</div>
										</td>
										<td className="align-middle">{coin.volume}</td>
										<td className="align-middle">{coin.tvl}</td>
										<td className="align-middle">{coin.tvl}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
