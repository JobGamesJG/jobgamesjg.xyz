import Head from "next/head";
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
			<div className="projects">
				<ProjectList />
			</div>
		</>
	);
};

export default minecraft;
