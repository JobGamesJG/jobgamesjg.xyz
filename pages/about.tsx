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
						I watch a lot of anime and I realy mean A LOT😅. Once I finshed over 50 episodes in one
						sitting🥱, thats like 16 hours. Now I watch less because of school😢. Every episode I
						have watched is shown on MyAnimeList and displayed here on my website.
					</p>
					<AnimeListComp animes={animes} />
				</div>
			</div>
		</>
	);
};

export default About;
