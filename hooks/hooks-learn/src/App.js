import "./App.css";
import React, { useState, useCallback } from "react";
import ItemsList from "./itemsList";
import Main from "./main";
import Alert from "./alert";

export const AlertContex = React.createContext();

function App() {
	const [alert, setAlert] = useState(false);

	const toggleAlert = () => setAlert((prev) => !prev);
	return (
		<AlertContex.Provider value={alert}>
			<div className={"container pt-3"}>
				<Alert />
				<Main toggle={toggleAlert} />
			</div>
		</AlertContex.Provider>
	);
}

export default App;
