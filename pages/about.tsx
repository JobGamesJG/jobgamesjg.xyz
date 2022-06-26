import { AboutText, Socials, AnimeListComp } from "../components/about";
import BreakLine from "../components/breakline";
import { AnimeList, calculateAge } from "../lib";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const About: NextPage = () => {
	const [animes, setAnimes] = useState<AnimeList[] | null>(null);
	const age = calculateAge();

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
				<meta property="og:site_name" content="JobGamesJG" />
				<meta property="og:title" content="JobGamesJG" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://jobgamesjg.xyz/about" />
				<meta
					property="og:description"
					content={`Hello, my name is Job! ${age} year-old programmer from the Netherlands. This is my personal website, feel free to check it out!`}
				/>
				<meta
					property="og:image"
					content="https://lh3.googleusercontent.com/ogw/ADea4I56cV0MI-3fEb1-xju9CNHA1Dmjnli66rEgwU-hsQ=s256-c-mo"
				/>
			</Head>
			<div className="about">
				<div className="about-me">
					<div className="about-items">
						<img
							alt=""
							className="about-img"
							src="https://lh3.googleusercontent.com/ogw/ADea4I56cV0MI-3fEb1-xju9CNHA1Dmjnli66rEgwU-hsQ=s256-c-mo"
						/>
					</div>
					<div>
						<AboutText />
						<Socials />
					</div>
				</div>
				<BreakLine />
				<div className="anime">
					<h1 className="anime-main-title">Animes</h1>
					<p className="anime-self-info">
						I watch a lot of anime and I realy mean A LOT😅. My personal record is 50 episodes in 1
						run, that is over 16 hours of watching! Unfortunately I am unable to do that again as
						school requires a lot of attention😢, though I hope to do such a long run again in the
						near future. If you ever need some recommendations or just want to checkout the animes
						I&apos;ve watched so far, a list of them are down below together with the stats, status,
						count, etc.
					</p>
					<AnimeListComp animes={animes} />
				</div>
			</div>
		</>
	);
};

export default About;
