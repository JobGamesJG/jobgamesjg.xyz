import { motion, Variants } from "framer-motion";
import Socials from "../components/socials";
import type { NextPage } from "next";
import { calculateAge } from "../lib";
import Head from "next/head";

const Home: NextPage = () => {
	const age = calculateAge();

	const variants: Variants = {
		initial: { opacity: 0, x: -25 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 0, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	};

	const variants2: Variants = {
		initial: { opacity: 0, x: 25 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	};

	const variants3: Variants = {
		initial: { opacity: 0, x: -25 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] },
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
				<meta
					property="og:image"
					content="https://lh3.googleusercontent.com/ogw/ADea4I56cV0MI-3fEb1-xju9CNHA1Dmjnli66rEgwU-hsQ=s256-c-mo"
				/>
			</Head>
		</>
	);
};

export default Home;
