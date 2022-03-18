import "./App.css";
import React, { useState } from "react";
//About Hook useState
function init() {
	return Math.ceil(Math.random() * 10);
}

function App() {
	//const [counter, setCounter] = useState(10);
	//let initState = init();
	const [counter, setCounter] = useState(() => {
		return init();
	});

	const [state, setSateobj] = useState({
		title: "Obj count",
		date: Date.now(),
	});

	function plus() {
		//setCounter(counter + 1);
		setCounter((prev) => {
			return prev + 1;
		});
		/*setCounter((prev2) => {
			return prev2 + 1;
		});*/
	}

	function minus() {
		setCounter(counter - 1);
	}

	function newTitle() {
		setSateobj((prev) => {
			return {
				...prev,
				title: "New title",
			};
		});
	}

	return (
		<div className="p-5">
			<h1>Calculate: {counter}</h1>
			<button onClick={plus} className="btn btn-success">
				Plus
			</button>
			<button onClick={minus} className="btn btn-danger">
				Minus
			</button>

			<button onClick={newTitle} className="btn btn-primary">
				Change obj
			</button>
			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
}

export default App;

//useeffect if this vsr is change it rerender by function
function App() {
	const [type, setType] = useState("users");
	const [data, setData] = useState([]);
	const [pos, setPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}?_limit=3`)
			.then((response) => response.json())
			.then((json) => setData(json));
	}, [type]);

	const mouseMoveHandler = (e) => {
		setPos({
			x: e.clientX,
			y: e.clientY,
		});
	};

	useEffect(() => {
		window.addEventListener("mousemove", mouseMoveHandler);
		return () => {
			window.removeEventListener("mousemove", mouseMoveHandler);
		};
	}, []);
	return (
		<div className="p-5">
			<h1>Resurse: {type}</h1>
			<button className="btn btn-info" onClick={() => setType("users")}>
				Users
			</button>
			<button className="btn btn-dark" onClick={() => setType("todos")}>
				Todo
			</button>
			<button className="btn btn-info" onClick={() => setType("posts")}>
				Posts
			</button>
			{/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
			<pre>{JSON.stringify(pos, null, 2)}</pre>
		</div>
	);
}

//useRef
const renderCount = useRef(1);
const inputRef = useRef(null);
const prevValue = useRef();

useEffect(() => {
	//setRenderCount((prev) => prev + 1);-manytimes rerender
	//return countOfRenders++;
	renderCount.current++;
	console.log(inputRef.current.value);
});

useEffect(() => {
	prevValue.current = value;
}, [value]);

const focus = () => inputRef.current.focus();

	{/*<h1>Rendered: {renderCount}</h1>*/}
			{/*<h1>Rendered: {countOfRenders}</h1>
			<input
				type="text"
				onChange={(e) => setValue(e.target.value)}
				value={value}
  ></input>*/}

			<h1>Rendered: {renderCount.current}</h1>
			<h2>prevValue: {prevValue.current}</h2>
			<input
				type="text"
				ref={inputRef}
				onChange={(e) => setValue(e.target.value)}
				value={value}
			></input>

			//use memo
			function complexCompute(n) {
		let i = 0;
		while (i < 1000000000) {
			i++;
		}
		return n * 2;
	}

	const computed = useMemo(() => {
		return complexCompute(number);
	}, [number]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const styles = useMemo(
		() => ({
			color: colored ? "blue" : "pink",
		}),
		[colored]
	);

	useEffect(() => {
		console.log("Change style");
	}, [styles]);
//useCallback

const [number, setNumber] = useState(1);
	const [colored, setColor] = useState(false);

	const styles = {
		color: colored ? "blue" : "pink",
	};

	const generateItemFromIpi = useCallback(() => {
		return new Array(number)
			.fill("")
			.map((_, index) => `Elem from index ${index}`);
	}, [number]);

	return (
		<>
			<div className="p-5">
				<h1 style={styles}>Calculate: {number}</h1>
				<button
					onClick={() => setNumber((prev) => prev + 1)}
					className="btn btn-success"
				>
					Plus
				</button>
				<button
					onClick={() => setNumber((prev) => prev - 1)}
					className="btn btn-danger"
				>
					Minus
				</button>
				<button
					onClick={() => setColor((prev) => !prev)}
					className="btn btn-primary"
				>
					Change
				</button>
			</div>
			<ItemsList getItems={generateItemFromIpi} />
		</>
	);