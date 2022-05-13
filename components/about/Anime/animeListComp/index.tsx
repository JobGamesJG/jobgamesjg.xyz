import type { AnimeList } from "../../../../lib";
import React, { useState } from "react";
import { AnimeCard } from "../animeCard";
import { AnimatePresence, motion } from "framer-motion";
import { PulseLoader } from "react-spinners";

export const AnimeListComp: React.FC<{ animes: AnimeList[] | null }> = ({ animes }) => {
	const [count, setCount] = useState(12);
	const onClick = () => setCount(count + 12);

	return (
		<AnimatePresence exitBeforeEnter>
			{animes ? (
				<>
					<motion.div
						key="2"
						className="anime-list"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 1,
								ease: [0.6, -0.05, 0.01, 0.99],
							},
						}}
						exit={{ opacity: 0 }}>
						{animes
							.slice(0, count)
							.filter((x) => x)
							.map((anime, i) => (
								<AnimeCard key={i} {...anime} number={i + 1} />
							))}
					</motion.div>
					{count < animes.length && (
						<div className="animes-load-more" onClick={onClick}>
							<p>Load more</p>
						</div>
					)}
				</>
			) : (
				<motion.div
					key="1"
					style={{
						width: "100%",
						height: "100%",
						display: "grid",
						placeItems: "center",
					}}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 1,
							ease: [0.6, -0.05, 0.01, 0.99],
						},
					}}
					exit={{ opacity: 0 }}>
					<PulseLoader color="#fff" size={20} />
				</motion.div>
			)}
		</AnimatePresence>
	);
};
