import { Project } from "../../lib/types";
import { motion } from "framer-motion";
import React from "react";
import Tippy from "@tippyjs/react";

const ProjectCard: React.FC<Project> = (project) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					duration: 0.5 + 0.2 * (1 % 10 || 10),
					ease: [0.6, -0.05, 0.01, 0.99],
				},
			}}
			className="projects-item">
			<div>
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<img src={project.image} alt="" />
				<div>
					{project.buttons.map((button, key) => (
						<Tippy key={key} content={<p>{button.tooltip}</p>}>
							<button onClick={() => window.open(button.url)}>
								<i className={button.class} />
							</button>
						</Tippy>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
