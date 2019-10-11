import React from "react";
import styled from "styled-components";

const Card = styled.div`
	max-width: 30%;
	min-width: 30%;
	background: rgba(226, 207, 193, 0.6);
	margin: 2vw 5vw;
	padding: 1vh;
`;

const Brewery = ({ brewery }) => {
	const {
		name,
		brewery_type,
		website_url,
		street,
		city,
		state,
		postal_code,
		country
	} = brewery;
	return (
		<Card className="card">
			<h2 className="card-title">{name}</h2>
			<p class="card-subtitle mb-2 text-muted">Brewery Type: {brewery_type}</p>
			<a class="card-link" S href="">
				{website_url}
			</a>
			<address class="card-text">
				{street}
				<br />
				{city}, {state} {postal_code}
				<br />
				{country}
			</address>
		</Card>
	);
};

export default Brewery;
