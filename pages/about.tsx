import { AboutText } from "../components/about/index";
import { MojangRaw, calculateAge } from "../lib";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
	const age = calculateAge();

	const [minecrafts, setMinecraft] = useState<MojangRaw[] | null>(null);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		axios
			.get<{ minecraft: MojangRaw[] }>("/api/mojang", { cancelToken: token })
			.then((res) => setMinecraft(res.data.minecraft))
			.catch((err: AxiosError) => console.error(`[minecraft]: ${err.message}`));

		return () => cancel("Request cancelled");
	}, []);

	return (
		<>
			<Head>
				<title>JobGamesJG - about</title>
			</Head>
			<div className="about-wrapper">
				<div className="about">
					<div className="about-items">
						<img
							className="about-img"
							src="https://lh3.googleusercontent.com/ogw/ADea4I56cV0MI-3fEb1-xju9CNHA1Dmjnli66rEgwU-hsQ=s256-c-mo"
							alt=""
						/>
						<AboutText />
					</div>
					<div className="about-breakline" />
				</div>
			</div>
		</>
	);
};

export default About;
