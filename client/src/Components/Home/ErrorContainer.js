import React from "react";

const ErrorContainer = (props) => {
	let message = props.message || "";
	return (
		<p
			style={{
				color: "red",
			}}
		>
			{message}
		</p>
	);
};

export default ErrorContainer;
