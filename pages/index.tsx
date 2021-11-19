import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div className="landing-wrapper">
			<div className="landing">
				<div className="landing-text">
					<h1 className="landing-title">Hello I am Job 👋</h1>
					<p className="landing-small">I am a 13 year-old java script developer</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
