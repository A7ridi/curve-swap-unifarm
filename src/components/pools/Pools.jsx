import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { allCoins } from "./AllCoins";
import MultipleLogo from "./MultipleLogo";
import "./pools.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const displayCoins = ["All", "USD", "BTC", "ETH", "CRYPTO", "OTHERS"];

const Pools = () => {
	const [search, setSearch] = useState("");
	const [selectedCoin, setSelectedCoin] = useState(displayCoins[0]);

	const filterCoins = allCoins.filter((coin) => {
		if (selectedCoin.toLowerCase() === "all") {
			return coin;
		} else return selectedCoin.toLowerCase() === coin.type.toLowerCase();
	});

	const clearSearch = () => setSearch("");

	return (
		<div className="home-container">
			<div className="pools-card">
				<div className="p-3">
					<div className="search-input">
						<BsSearch size="1rem" />
						<input
							type="text"
							onChange={(e) => setSearch(e.target.value)}
							value={search}
							placeholder="Search by pool name, pools address, token name or token address"
						/>
						<span className="pool-close-btn" onClick={clearSearch}>
							&times;
						</span>
					</div>
				</div>

				<div className="all-coins">
					<div className="coin-list">
						{displayCoins.map((coin) => (
							<div
								className={`coin-name ${
									selectedCoin === coin ? "selected-coin" : "unselected-coin"
								}`}
								onClick={() => setSelectedCoin(coin)}
							>
								{coin}
							</div>
						))}
					</div>
					<div className="hide-text">
						<div className="form-check">
							<input
								className="form-check-input cursor-pointer"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							/>
							<label
								className="form-check-label cursor-pointer fw-semibold hide-token-text"
								for="flexCheckDefault"
							>
								Hide very small pools
							</label>
						</div>
					</div>
				</div>

				<div className="coins-table px-2">
					<table class="table">
						<thead>
							<tr>
								<th
									scope="col"
									className="table-header-text"
									style={{ width: "40%" }}
								>
									Pool
								</th>
								<th scope="col align-middle" className="table-header-text">
									Factory
								</th>
								<th scope="col align-middle" className="table-header-text">
									Type
								</th>
								<th
									scope="col align-middle d-flex flex-column"
									style={{ width: "30%" }}
									className="table-header-text"
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
								<th scope="col align-middle" className="table-header-text">
									Volume
								</th>
								<th scope="col align-middle" className="table-header-text">
									TVL
								</th>
							</tr>
						</thead>
						<tbody>
							{filterCoins.map((coin) => {
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
												<div className="font-sm table-data-text">
													{coin.address}
												</div>
												<div className="font-sm table-data-text">
													{coin.related}
												</div>
											</div>
										</td>
										<td className="align-middle table-header-text">
											{coin.factory}
										</td>
										<td className="align-middle table-header-text">
											{coin.type}
										</td>
										<td className="align-middle table-header-text">
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

export default Pools;
