import React, { useContext } from "react";
import { AlertContex } from "./alertLikeAng";

export default function Alert() {
	const alert = useContext(AlertContex);

	if (!alert) {
		return null;
	}
	return <div className={"alert alert-secondary"}>It is important</div>;
}
