import { motion, Variants } from "framer-motion";
import Socials from "../components/socials";
import type { NextPage } from "next";
import { calculateAge } from "../lib";
import Head from "next/head";

const Home: NextPage = () => {
	const age = calculateAge();

	const variants: Variants = {
		initial: { opacity: 0, x: -25 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 0, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	};

	const variants2: Variants = {
		initial: { opacity: 0, x: 25 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	};

	const variants3: Variants = {
		initial: { opacity: 0, x: -25 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	};

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
				<meta property="og:image" content="https://static.daangamesdg.xyz/discord/pfp.gif" />
			</Head>

			<div className="home-wrapper">
				<div className="home-img-wrapper">
					<div className="home">
						<div className="home-content">
							<div className="home-logo">
								<img
									className="home-img"
									src="https://lh3.googleusercontent.com/ogw/ADea4I56cV0MI-3fEb1-xju9CNHA1Dmjnli66rEgwU-hsQ=s256-c-mo"
									alt=""
								/>
								<p>JobGamesJG</p>
							</div>
							<div className="home-text">
								<h1 className="home-main-text">Hello, my name is Job</h1>
								<p className="home-info">{age} year-old programmer and student</p>
							</div>
							<div className="home-socials">
								<a href="https://discord.com/users/679240313952403457">
									<p>
										<i className="fab fa-discord"></i> <a className="socials-name">Discord</a>
									</p>
								</a>
								<a href="https://github.com/JobGamesJG">
									<p>
										<i className="fab fa-github"></i> <a className="socials-name">Github</a>
									</p>
								</a>
								<a href="https://www.youtube.com/channel/UCB76PdQLx9wg4DCKbsVhyvA">
									<p>
										<i className="fab fa-youtube"></i> <a className="socials-name">Youtube</a>
									</p>
								</a>
								<a href="https://www.twitch.tv/jobgamesjg">
									<p>
										<i className="fab fa-twitch"></i> <a className="socials-name">Twitch</a>
									</p>
								</a>
								<a href="https://twitter.com/JobGamesJG">
									<p>
										<i className="fab fa-twitter"></i> <a className="socials-name">Twitter</a>
									</p>
								</a>
								<a href="https://www.instagram.com/jobgamesjg/">
									<p>
										<i className="fab fa-instagram"></i> <a className="socials-name">Instagram</a>
									</p>
								</a>
								<a href="https://www.tiktok.com/@jobgamesjg">
									<p>
										<i className="fab fa-tiktok"></i> <a className="socials-name">TikTok</a>
									</p>
								</a>
								<a href="https://www.reddit.com/user/JobGamesJG">
									<p>
										<i className="fab fa-reddit"></i> <a className="socials-name">Reddit</a>
									</p>
								</a>
							</div>
						</div>
						<div className="home-img-main">
							<img
								alt=""
								src="https://qph.cf2.quoracdn.net/main-qimg-c9eab7e23f8d6c769d40acdcd7ee8f13"
							/>
						</div>
					</div>
				</div>
				<div className="home-action">
					<p>View about me</p>
					<i className="fab fa-reddit"></i>
				</div>
			</div>
		</>
	);
};

export default Home;
