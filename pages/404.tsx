/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { calculateAge } from "../lib";

const Home: NextPage = () => {
	const age = calculateAge();

	return (
		<>
			<Head>
				<title>JobGamesJG - 404</title>
			</Head>
			<div className="error404-wrapper">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
					}}
					className="error404">
					<img
						className="error404-img"
						src="https://cdn.jobgamesjg.tk/files/pfp.gif?raw=true"
						alt=""
					/>
					<p className="error404-text">Don&apos;t cry</p>
					<p className="error404-text">Its just a 404 error, try again</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: { duration: 1, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] },
					}}
					className="error404-button">
					<a href="/">
						<i className="fas fa-home"></i> Home
					</a>
				</motion.div>
			</div>
		</>
	);
};

export default Home;
