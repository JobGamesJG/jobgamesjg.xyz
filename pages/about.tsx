import { AboutText } from "../components/about/index";
import { calculateAge } from "../lib";
import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
	const age = calculateAge();

	return (
		<>
			<Head>
				<title>JobGamesJG - about</title>
			</Head>
			<div className="about">
				<div className="about-me">
					<div className="about-items">
						<img
							alt=""
							className="about-img"
							src="https://lh3.googleusercontent.com/ogw/ADea4I56cV0MI-3fEb1-xju9CNHA1Dmjnli66rEgwU-hsQ=s256-c-mo"
						/>
					</div>
					<div>
						<AboutText />
					</div>
				</div>
				<div className="about-breakline" />
			</div>
		</>
	);
};

export default About;
