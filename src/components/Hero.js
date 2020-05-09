import React from "react";

const Hero = (props) => {
	const {
		appliedFilters: { availabilityFrom, availabilityTo, country, price, rooms },
	} = props;
	const availabilityFromFormatted = availabilityFrom.format("D [de] MMMM [del] YYYY");
	const availabilityToFormatted = availabilityTo.format("D [de] MMMM [del] YYYY");

	let priceSymbols = "";
	for (let i = 0; i < price; i++) {
		priceSymbols += "$";
	}

	return (
		<section className="hero is-dark">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">Hoteles</h1>
					<h2 className="subtitle">
						desde el <strong>{availabilityFromFormatted} </strong>
						hasta el <strong>{availabilityToFormatted}</strong>
						{country !== null && (
							<>
								, en <strong>{country}</strong>
							</>
						)}
						{price !== null && (
							<>
								, con un precio de <strong>{priceSymbols}</strong>
							</>
						)}
						{rooms !== null && (
							<>
								, con al menos <strong>{rooms} habitaciones</strong>
							</>
						)}
					</h2>
				</div>
			</div>
		</section>
	);
}

export default Hero;
