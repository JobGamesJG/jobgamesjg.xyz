import { motion, Variants } from "framer-motion";
import Socials from "../components/socials";
import type { NextPage } from "next";
import { calculateAge } from "../lib";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Stats: NextPage = () => {
	const age = calculateAge();

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
						<h1>Hi, I am</h1> <h1>Job</h1>
						<div className="home-info">{age} year-old anime enjoyer and programmer🐒👍🏾</div>
					</div>

					<div className="home-action">
						<a href="./about">
							View About Me <i className="fas fa-arrow-circle-right"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Stats;
