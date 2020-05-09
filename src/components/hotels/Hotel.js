import React from "react";

import Feature from './Feature';
import Price from './Price';

const Hotel = (props) => {
	const { data: { photo, name, description, city, country, rooms, price}, maxPrice } = props;

	return (
		<>
			<div className="column is-one-third">
				<div className="card">
					<div className="card-image">
						<figure className="image is-4by3">
							<img src={photo} alt={name} />
						</figure>
					</div>
					<div className="card-content">
						<p className="title is-4">{name}</p>
						<p>{description}</p>
						<div className="field is-grouped is-grouped-multiline" style={{ marginTop: "1em" }}>
							<Feature icon="fas fa-map-marker" label={`${city}, ${country}`} />
							<Feature icon="fas fa-bed" label={`${rooms} habitaciones`} />
							<Price price={price} maxPrice={maxPrice} />
						</div>
					</div>
					<div className="card-footer">
						<a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-danger has-text-white has-text-weight-bold">
							Reservar
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hotel;
