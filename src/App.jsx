import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
	console.log("init")
	const [num, setNum] = useState(0);
	const [faceShowFlag, setFaceShowFlag] = useState(true)

	const onClickCountUp = () => {
		setNum(num + 1)
	};
	const onClickSwitchShowFlag = () => {
		setFaceShowFlag(!faceShowFlag);
	};

	useEffect(() => {
		if (num % 3 === 0) {
			faceShowFlag || setFaceShowFlag(true);
		} else {
			faceShowFlag && setFaceShowFlag(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [num]);

	return (
		<>
			<h1 style={{ color: 'red' }}>RED</h1>
			<ColorfulMessage color="blue">BLUE</ColorfulMessage>
			<ColorfulMessage color="pink">PINK</ColorfulMessage>
			<button onClick={onClickCountUp}>カウントアップ</button>
			<br />
			<button onClick={onClickSwitchShowFlag}>on/off</button>
			<p>{num}</p>
			{faceShowFlag && <p>(^ ^)</p>}
		</>
	);
};

export default App