import React from "react";

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
		<div>
			<h2>{name}</h2>
			<p>Brewery Type: {brewery_type}</p>
			<a href="">{website_url}</a>
			{/* <address>
                {street}<br>
                {city}, {state} {postal_code}<br>
                {country}
            </address> */}
		</div>
	);
};

export default Brewery;
