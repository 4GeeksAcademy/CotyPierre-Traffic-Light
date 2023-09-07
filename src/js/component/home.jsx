import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [	selectedColor, setSelectedColor ] = useState("green");
	return (
		<div className="traffic-light">
			<div onClick={() => setSelectedColor ("red")}
			className={"Light red" + (selectedColor === "red" ? " glow" : "")}></div>
			
			<div onClick={() => setSelectedColor ("yellow")}
			className={"Light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>

			<div onClick={() => setSelectedColor ("green")}
			className={"Light green" + (selectedColor === "green" ? " glow" : "")}></div>
		</div>
	);
};

export default Home;
