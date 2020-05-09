import React from "react";

import DateInput from "./DateInput";
import ComboInput from "./ComboInput";

const Filters = (props) =>  {
	const { hotels, appliedFilters, changeFilter } = props;
	const [ countries, prices, rooms ] = [
		[...new Set(hotels.map(hotel => (hotel.country)).sort())],
		[...new Set(hotels.map(hotel => (hotel.price)).sort((a, b) => a - b))],
		[...new Set(hotels.map(hotel => (hotel.rooms < 10 ? 10 : hotel.rooms - (hotel.rooms % 10))).sort((a, b) => a - b))],
	];
	const [ countriesOptions, pricesOptions, roomsOptions ] = [
		[{label: "Todos los países", value: ""}, ...countries.map(country => ({label: country, value: country}))],
		[{label: "Todos los precios", value: ""}, ...prices.map(price => {
			let priceLabel = "";
			for (let i = 0; i < price; i++) {
				priceLabel += "$";
			}
			
			return ({label: priceLabel, value: price})
		})],
		[{label: "Todos los tamaños", value: ""}, ...rooms.map(roomsNumber => ({label: `Al menos ${roomsNumber} habitaciones`, value: roomsNumber}))],
	]

	return (
		<nav className="navbar is-light" style={{ justifyContent: "center" }}>
			<div className="navbar-item">
				<DateInput iconClass="fa-sign-in-alt" filterKey="availabilityFrom" onChangeValue={changeFilter} value={appliedFilters.availabilityFrom} />
			</div>
			<div className="navbar-item">
				<DateInput iconClass="fa-sign-out-alt" filterKey="availabilityTo" onChangeValue={changeFilter} value={appliedFilters.availabilityTo} />
			</div>
			<div className="navbar-item">
				<ComboInput iconClass="fa-globe" filterKey="country" onChangeValue={changeFilter} options={countriesOptions} />
			</div>
			<div className="navbar-item">
				<ComboInput iconClass="fa-dollar-sign" filterKey="price" onChangeValue={changeFilter} options={pricesOptions} />
			</div>
			<div className="navbar-item">
				<ComboInput iconClass="fa-bed" filterKey="rooms" onChangeValue={changeFilter} options={roomsOptions} />
			</div>
		</nav>
	);
}

export default Filters;
