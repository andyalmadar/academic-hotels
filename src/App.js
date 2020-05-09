import React, { Component } from "react";
import "./App.scss";
import "bulma/bulma.sass";
import "@fortawesome/fontawesome-free/css/all.css";
import moment from "moment";
import "moment/locale/es";

import Hero from "./components/Hero";
import Filters from "./components/Filters";
import HotelsList from "./components/hotels/HotelsList";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			appliedFilters: {
				availabilityFrom: moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
				availabilityTo: moment().add(2, "month"),
				country: null,
				price: null,
				rooms: null,
			},
			hotels: [],
			filteredHotels: [],
			isAllLoaded: false,
		};

		this.changeFilter = this.changeFilter.bind(this);
	}

	componentDidMount() {
		fetch("https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica")
			.then((hotels) => hotels.json())
			.then((hotels) => {
				this.setState(state => (
					{
						hotels: hotels,
						filteredHotels: this.getFilteredHotels(state.appliedFilters, hotels),
						isAllLoaded: true,
					}
				));
			})
			.catch(() => console.log("Error en la petición..."));
	}

	changeFilter(newAppliedFilter) {
		const { filterkey, value } = newAppliedFilter;

		const filtersToBeApplied = {
			...this.state.appliedFilters,
			[filterkey]: 
				(
					filterkey === "availabilityFrom" ? (
						this.state.appliedFilters.availabilityTo.valueOf() < value.valueOf()
					) : (
						filterkey === "availabilityTo" ? (
							this.state.appliedFilters.availabilityFrom.valueOf() > value.valueOf()
						) : (
							false
						)
					)
				) ? (
					filterkey === "availabilityTo" ? (
						this.state.appliedFilters.availabilityFrom
					) : (
						this.state.appliedFilters.availabilityTo
					)
				) : (
					value
				)
		}
		const filteredHotels = this.getFilteredHotels(filtersToBeApplied, this.state.hotels);

		this.setState({
			filteredHotels,
			appliedFilters: filtersToBeApplied,
		});
	}

	getFilteredHotels(filtersToBeApplied, hotels) {
		const filteredHotels = hotels.filter((hotel) => {
			return (
				(hotel.availabilityFrom >= filtersToBeApplied.availabilityFrom.valueOf()) &&
				(hotel.availabilityTo <= filtersToBeApplied.availabilityTo.valueOf()) &&
				(filtersToBeApplied.country !== null ? hotel.country === filtersToBeApplied.country : true) &&
				(filtersToBeApplied.price !== null ? hotel.price === parseInt(filtersToBeApplied.price) : true) &&
				(filtersToBeApplied.rooms !== null ? hotel.rooms >= parseInt(filtersToBeApplied.rooms) : true)
			);
		});

		return filteredHotels;
	}

	warning() {
		return (
			<article className="message is-warning">
				<div className="message-body">Cargando hoteles...</div>
			</article>
		);
	}

	render() {
		const { appliedFilters, hotels, filteredHotels, isAllLoaded } = this.state;
		const maxPrice = hotels.reduce((max, hotel) => (max < hotel.price ? hotel.price : max), 1);

		return (
			<>
				<Hero appliedFilters={appliedFilters} />
				<Filters hotels={hotels} appliedFilters={appliedFilters} changeFilter={this.changeFilter} />
				{isAllLoaded === true ? <HotelsList hotels={filteredHotels} maxPrice={maxPrice} /> : this.warning()}
			</>
		);
	}
}

export default App;
