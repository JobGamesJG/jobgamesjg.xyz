import { AboutText, AnimeListComp } from "../components/about";
import { motion } from "framer-motion";
import Head from "next/head";
import type { NextPage } from "next";
import { AnimeList, calculateAge } from "../lib";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const Home: NextPage = () => {
	const age = calculateAge();
	const [animes, setAnimes] = useState<AnimeList[] | null>(null);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		axios
			.get<{ animes: AnimeList[] }>("/api/anime", { cancelToken: token })
			.then((res) => setAnimes(res.data.animes))
			.catch((err: AxiosError) => console.error(`[Animes]: ${err.message}`));

		return () => cancel("Request cancelled");
	}, []);

	return (
		<>
			<Head>
				<title>JobGamesJG - About</title>
			</Head>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
				}}
				className="about">
				<div className="about-me">
					<div className="about-items">
						<img className="about-img" src="https://cdn.jobgamesjg.tk/S4M2_7wt/pfp.gif" alt="" />
						<AboutText />
					</div>
					<div className="about-breakline" />
					<div className="anime">
						<h1 className="anime-main-title">Animes</h1>
						<AnimeListComp animes={animes} />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Home;
