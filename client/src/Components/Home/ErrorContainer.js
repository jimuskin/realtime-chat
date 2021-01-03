import React from "react";

const ErrorContainer = (props) => {
	let message = props.message || "";
	return <p className="error-text">{message}</p>;
};

export default ErrorContainer;
