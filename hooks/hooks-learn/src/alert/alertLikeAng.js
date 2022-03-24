import React from "react";
import { AlertContex } from "../alert/alert";

export const AlertContexLike = React.createContext();

export const AlertProvider = ({ children }) => {
	// eslint-disable-next-line no-undef
	const [alert, setAlert] = useState(false);

	const toggle = () => setAlert((prev) => !prev);

	return <AlertContex.Provider value={alert}>{children}</AlertContex.Provider>;
};
