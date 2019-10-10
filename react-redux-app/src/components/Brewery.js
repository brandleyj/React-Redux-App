import React from "react";

const Brewery = props => {
	return (
		<div>
			<h2>{props.name}</h2>
			<p>{props.website_url}</p>
		</div>
	);
};
