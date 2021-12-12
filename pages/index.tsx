import Head from "next/head";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { calculateAge } from "../lib";

const Home: NextPage = () => {
	const age = calculateAge();

	return (
		<>
			<Head>
				<title>JobGamesJG - Home</title>
			</Head>
			<div className="landing-wrapper">
				<div className="landing">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
						}}
						className="landing-text">
						<h1 className="landing-title">Hello, my name is Job👋</h1>
						<p className="landing-small">{age} year-old programmer from the Netherlands</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { duration: 1, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] },
						}}
						className="landing-buttons">
						<div className="landing-buttons">
							<a href="https://discord.com/users/679240313952403457">
								<i className="fab fa-discord"></i>
							</a>
							<a href="https://github.com/JobGamesJG">
								<i className="fab fa-github"></i>
							</a>
							<a href="https://twitter.com/JobGamesJG">
								<i className="fab fa-twitter"></i>
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Home;
