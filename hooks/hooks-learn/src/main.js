import React from "react";

export default function Main({ toggle }) {
	return (
		<>
			<h1> Context example hook</h1>
			<button className="btn btn-secondary" onClick={toggle}>
				Show alerrt
			</button>
		</>
	);
}
