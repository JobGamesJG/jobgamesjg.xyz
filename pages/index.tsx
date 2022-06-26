import { motion, Variants } from "framer-motion";
import Socials from "../components/socials";
import type { NextPage } from "next";
import { calculateAge } from "../lib";
import Head from "next/head";

const Home: NextPage = () => {
	const age = calculateAge();

	const variants: Variants = {
		initial: { opacity: 0, y: 25 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	};

	const variants2: Variants = {
		initial: { opacity: 0, x: -25 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	};

	const variants2_5: Variants = {
		initial: { opacity: 0, y: -25 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	};

	const variants3: Variants = {
		initial: { opacity: 0, x: -25 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 0, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	};

	return (
		<>
			<Head>
				<title>JobGamesJG - Home</title>
				<meta property="og:site_name" content="JobGamesJG" />
				<meta property="og:title" content="JobGamesJG" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://jobgamesjg.xyz" />
				<meta
					property="og:description"
					content={`Hello, my name is Job! ${age} year-old programmer from the Netherlands. This is my personal website, feel free to check it out!`}
				/>
				<meta property="og:image" content="https://cdn.jobgamesjg.xyz/files/JG-L.png?raw=true" />
			</Head>
			<div className="home-wrapper">
				<div className="home">
					<div className="home-text">
						<motion.div
							className="home-title"
							variants={variants3}
							initial="initial"
							animate="animate">
							<h1>Hi, I am</h1> <h1>Job</h1>
						</motion.div>
						<div className="home-info">
							<motion.p variants={variants2} initial="initial" animate="animate">
								{age} year-old anime enjoyer and programmer
								<motion.a variants={variants2_5} initial="initial" animate="animate">
									🐒👍🏾
								</motion.a>
							</motion.p>
						</div>
					</div>
					<motion.div variants={variants} initial="initial" animate="animate">
						<div className="home-action">
							<a href="./about">
								View About Me <i className="fas fa-arrow-circle-right"></i>
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Home;
