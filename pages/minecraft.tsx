import Head from "next/head";
import { motion } from "framer-motion";
import React from "react";
import ProjectList from "../components/projectList";
import { calculateAge } from "../lib";

const minecraft: React.FC = () => {
	const age = calculateAge();

	return (
		<>
			<Head>
				<title>JobGamesJG - Projects</title>
			</Head>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
				}}
				className="projects">
				<ProjectList />
			</motion.div>
		</>
	);
};

export default minecraft;
