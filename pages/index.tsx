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
			</Head>
			<div className="home-wrapper">
				<div className="home">
					<div className="home-text">
						<motion.h1
							initial="initial"
							animate="animate"
							variants={variants}
							className="home-main-text">
							Hello, my name is Job
						</motion.h1>
						<motion.p
							initial="initial"
							animate="animate"
							variants={variants2}
							className="home-info">
							{age} year-old programmer and student
						</motion.p>
					</div>
					<motion.div
						initial="initial"
						animate="animate"
						variants={variants3}
						className="landing-socials">
						<Socials />
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Home;
