import type { MangaList } from "../../../../lib";
import React, { useState } from "react";
import { MangaCard } from "../mangaCard";
import { AnimatePresence, motion } from "framer-motion";
import { PulseLoader } from "react-spinners";

export const MangaListComp: React.FC<{ mangas: MangaList[] | null }> = ({ mangas }) => {
	const [count, setCount] = useState(10000);

	return (
		<AnimatePresence exitBeforeEnter>
			{mangas ? (
				<>
					<motion.div
						key="2"
						className="card-list"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 1,
								ease: [0.6, -0.05, 0.01, 0.99],
							},
						}}
						exit={{ opacity: 0 }}>
						{mangas
							.slice(0, count)
							.filter((x) => x)
							.map((anime, i) => (
								<MangaCard key={i} {...anime} number={i + 1} />
							))}
					</motion.div>
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
					<div className="louding">
						<PulseLoader color="#fff" size={40} />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
