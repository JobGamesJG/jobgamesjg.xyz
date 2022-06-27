import { motion, useAnimation, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import BreakLine from "../breakline";

const Footer: React.FC = () => {
	return (
		<>
			<div className="footer-wrapper">
				<BreakLine />
				<div className="footer">
					<div className="footer-info">
						<p>JobGamesJG</p>
						<a href="https://github.com/JobGamesJG/jobgamesjg.xyz">
							<i className="fa-solid fa-code-fork"></i> Fork It
						</a>
					</div>
					<a className="footer-made">
						<i className="fa-solid fa-code"></i> made by{" "}
						<a href="https://jobgamesjg.xyz/">JobGamesJG</a> & helped by{" "}
						<a href="https://daangamesdg.xyz/">Ijskoud</a>
					</a>
				</div>
			</div>
		</>
	);
};

export default Footer;
