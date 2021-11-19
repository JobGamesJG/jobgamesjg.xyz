import type { NextPage } from "next";
import { calculateAge } from "../lib";

const Home: NextPage = () => {
	const age = calculateAge();

	return (
		<div className="landing-wrapper">
			<div className="landing">
				<div className="landing-text">
					<h1 className="landing-title">Hello I am Job 👋</h1>
					<p className="landing-small">I am a {age} year-old programmer</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
