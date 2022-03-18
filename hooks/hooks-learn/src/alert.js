import React, { useContext } from "react";
import { AlertContex } from "./App";

export default function Alert() {
	const alert = useContext(AlertContex);

	if (!alert) {
		return null;
	}
	return <div className={"alert alert-secondary"}>It is important</div>;
}
