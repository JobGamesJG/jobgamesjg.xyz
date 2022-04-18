import axios, { AxiosError } from "axios";
import { motion, Variants } from "framer-motion";
import type { NextPage } from "next";
import { calculateAge, InstagramList } from "../lib";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const Socials: NextPage = () => {
	const age = calculateAge();
	const [Instagrams, setInstagrams] = useState<InstagramList[] | null>(null);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		axios
			.get<{ Instagrams: InstagramList[] }>("/api/insta", { cancelToken: token })
			.then((res) => setInstagrams(res.data.Instagrams))
			.catch((err: AxiosError) => console.error(`[Instagrams]: ${err.message}`));

		return () => cancel("Request cancelled");
	}, []);

	return (
		<>
			<Head>
				<title>JobGamesJG - Home - Socials</title>
			</Head>
			<div className="Instagram"></div>
		</>
	);
};

export default Socials;
