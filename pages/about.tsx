import Head from "next/head";
import type { NextPage } from "next";
import { calculateAge } from "../lib";

const Home: NextPage = () => {
	const age = calculateAge();

	return (
		<>
			<Head>
				<title>JobGamesJG - About</title>
			</Head>
			<div className="about">
				<div className="about-me">
					<div className="about-items">
						<img className="about-img" src="https://cdn.jobgamesjg.tk/S4M2_7wt/pfp.gif" alt="" />
					</div>
					<div className="about-info">
						<div className="about-title">About Me</div>
						<div className="about-text-items">
							<div className="about-text">
								Hi, I&apos;m Job Klarenbeek, also known as JobGamesJG. I am a {age} year old
								programmer from the Netherlands.
							</div>
							<div className="about-text">
								In my free time I watch anime, play games or do sports, but most important I
								program. I program website like these and I&apos;m trying to make minecraft mods.
								Besides mods I also make texture packs If you wanna check out that out go visit my
								minecraft tab above.
							</div>
							<div className="about-text">
								Well... that’s it there is nothing else I can tell you about my life, after all I am
								just a normal person, doing whats asked. Dont forget to check out my anime list down
								below.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
