import "./App.css";
import React, { useState } from "react";

function App() {
	const [name, setName] = useState("");

	const changehandler = (e) => {
		setName(e.target.value);
	};
	return (
		<div className={"container pt-3"}>
			<input type="text" value={name} onChange={changehandler} />

			<h1>{name}</h1>
		</div>
	);
}

export default App;
