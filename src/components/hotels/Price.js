import React from "react";

const Price = (props) => {
	const { price, maxPrice } = props;
	
	let priceSymbolsStatus = [];
	for (let i = 1; i <= parseInt(maxPrice); i++) {
		priceSymbolsStatus.push(i <= price);
	}

	return (
		<>
			<div className="control">
				<div className="tags">
					<span className="tag is-medium is-dark">
						{priceSymbolsStatus.map((priceOn, index) =>
							priceOn === true ? (
								<i
									key={`price-${index + 1}`}
									className="fas fa-dollar-sign"
									style={{
										margin: "0 .125em",
									}}
								></i>
							) : (
								<i
									key={`price-${index + 1}`}
									className="fas fa-dollar-sign"
									style={{
										margin: "0 .125em",
										opacity: ".25",
									}}
								></i>
							)
						)}
					</span>
				</div>
			</div>
		</>
	);
}

export default Price;
