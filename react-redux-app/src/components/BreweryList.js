import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBreweries } from "../action/index";
import Brewery from "./Brewery";

import styled from "styled-components";

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

const BreweryList = props => {
	useEffect(() => {
		props.fetchBreweries();
	}, []);

	if (props.isFetching) {
		return <h2>Loading Breweries...</h2>;
	}

	return (
		<Cards>
			{props.error && <p>{props.error}</p>}
			{props.breweries.map(brewery => (
				// console.log(brewery)
				<Brewery key={brewery.id} brewery={brewery} />
			))}
		</Cards>
	);
};

const mapStateToProps = state => {
	return {
		breweries: state.breweries,
		isFetching: state.isFetching,
		error: state.error
	};
};

export default connect(
	mapStateToProps,
	{ fetchBreweries }
)(BreweryList);
