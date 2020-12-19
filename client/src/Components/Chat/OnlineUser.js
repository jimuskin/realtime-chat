import React from "react";

const OnlineUser = (props) => {
	return (
		<div
			style={{
				marginLeft: 15,
				marginTop: 5,
			}}
		>
			<p
				style={{
					margin: 0,
				}}
			>
				{props.name}
			</p>
		</div>
	);
};

export default OnlineUser;
