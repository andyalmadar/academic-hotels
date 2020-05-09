import React from "react";

import Hotel from "./Hotel";

const HotelsList = (props) => {
	const { hotels, maxPrice } = props;

	return (
		<>
			{hotels.length > 0 ? (
				<div className="container">
					<div className="hotels columns is-multiline is-marginless">
						{hotels.map((hotel) => (
							<Hotel key={hotel.slug} maxPrice={maxPrice} data={hotel} />
						))}
					</div>
				</div>
			) : (
				<article className="message is-warning">
					<div className="message-body">No se han encontrado hoteles que coincidan con los parámetros de búsqueda.</div>
				</article>
			)}
		</>
	);
}

export default HotelsList;
