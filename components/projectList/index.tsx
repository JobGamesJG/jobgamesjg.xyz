import ProjectCard from "../projectCard";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import projects from "../../lib/assets/projects.json";

const ProjectList: React.FC = () => {
	const [count, setCount] = useState(10);
	const onClick = () => setCount(count + 10);

	return (
		<AnimatePresence exitBeforeEnter>
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
				{projects
					.slice(0, count)
					.filter((x) => x)
					.map((project, key) => (
						<ProjectCard key={key} {...project} />
					))}
				{count < projects.length && (
					<p className="animes-load-more" onClick={onClick}>
						Load more
					</p>
				)}
			</motion.div>
		</AnimatePresence>
	);
};

export default ProjectList;
