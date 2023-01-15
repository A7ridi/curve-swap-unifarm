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
					<div className="view-address-mobile">
						<input type="text" placeholder="0x..." />
					</div>
					<div className="total-balances">
						<span className="fw-bold font-lg mb-2 total-balances">
							Total Balances
						</span>
					</div>
					<div className="vertical-line"></div>
					<div className="total-vecrv">
						<div className="fw-bold font-lg total-vecrv-text">Total veCRV</div>
						<div className="font-sm vecrv-text">
							veCRV <span className="fw-semibold">0</span>
						</div>
						<div className="font-sm vecrv-text">
							Locked for <span className="fw-semibold">0</span> days
						</div>
						<div className="font-sm d-flex align-items-center mt-2 vecrv-text">
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
						<button className="btn btn-primary px-5 my-2 w-75 claim-rewards-text">
							Claim LP Rewards
						</button>
					</div>
					<div className="vertical-line"></div>
					<div className="view-address">
						<div className="font-lg fw-bold">View Address</div>
						<input type="text" placeholder="0x..." />
					</div>
				</div>

				<div className="my-2 d-flex p-3 mx-3 dashboard-middle">
					<div className="daily-profits">
						<div className="fw-bold mb-1 total-vecrv-text">
							Total Daily Profits
						</div>
						<div className="d-flex justify-content-between bottom-line mb-1">
							<span className="vecrv-text">Base</span>
							<span className="vecrv-text">0</span>
						</div>

						<div className="d-flex justify-content-between bottom-line mb-1">
							<span className="vecrv-text">CRV</span>
							<span className="vecrv-text">0</span>
						</div>
						<div className="d-flex justify-content-between">
							<span className="fw-semibold vecrv-text">USD Total</span>
							<span className="fw-semibold vecrv-text">≈ $0</span>
						</div>
					</div>

					<div className="claimable-tokens">
						<div className="fw-bold mb-1 total-vecrv-text">
							Claimable Tokens
						</div>
						<div className="d-flex justify-content-between bottom-line mb-1">
							<span className="vecrv-text">CRV</span>
							<span className="vecrv-text">0</span>
						</div>
						<div className="d-flex justify-content-between">
							<span className="fw-semibold vecrv-text">USD Total</span>
							<span className="fw-semibold vecrv-text">≈ $0</span>
						</div>
					</div>
				</div>

				<div className="coins-table px-2">
					<table class="table">
						<thead>
							<tr className="app-bg">
								<th
									scope="col"
									className="align-middle table-header-text"
									style={{ width: "40%" }}
								>
									Pool
								</th>
								<th
									scope="col d-flex flex-column"
									style={{ width: "30%" }}
									className="align-middle"
								>
									<div className="d-flex align-items-center base-vapy table-header-text">
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
										<div className="base-vapy d-flex align-items-center table-header-text">
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
								<th scope="col" className="align-middle table-header-text">
									Balance
								</th>
								<th scope="col" className="align-middle">
									<div className="d-flex flex-column">
										<span className="table-header-text">USD Profits</span>
										<span className="table-header-text">CRV Profits</span>
									</div>
								</th>
								<th scope="col" className="align-middle table-header-text">
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
												<div className="fw-semibold table-header-text">
													3Pool
												</div>
												<div className="font-smtable-data-text">
													{coin.address}
												</div>
												<div className="font-sm table-data-text">
													{coin.related}
												</div>
											</div>
										</td>
										<td className="align-middle">
											<div className="d-flex flex-column table-header-text">
												{coin.base}
												<div>
													0.33%
													<HiOutlineArrowNarrowRight className="mx-2" />
													0.85%
												</div>
											</div>
										</td>
										<td className="align-middle table-header-text">
											{coin.volume}
										</td>
										<td className="align-middle table-header-text">
											{coin.tvl}
										</td>
										<td className="align-middle table-header-text">
											{coin.tvl}
										</td>
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
