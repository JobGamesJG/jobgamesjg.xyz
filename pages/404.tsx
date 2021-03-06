/* eslint-disable @next/next/no-html-link-for-pages */
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
					<div className="error404-text-wrapper">
						<p className="error404-text">[404]</p>
						<p className="error404-text">Page Not Found</p>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { duration: 1, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] },
						}}
						className="error404-action">
						<a href="/">
							Home <i className="fas fa-home"></i>
						</a>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Home;
