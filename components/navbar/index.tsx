import { motion, useAnimation, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

const Navbar: React.FC = () => {
	const [navOpen, setNavOpen] = useState(false);
	const [active, setActive] = useState(false);

	return (
		<>
			<div className="navbar-wrapper">
				<div className="navbar-pc">
					<div className="navbar">
						<div className="navbar-content">
							<div className="navbar-logo">
								<img
									className="navbar-img"
									src="https://cdn.jobgamesjg.xyz/files/JG-L.png?raw=true"
									alt=""
								/>
							</div>
							<div className={navOpen ? "navbar-routes active" : "navbar-routes"}>
								<NavLink href="/" name="Home" onClick={() => setNavOpen(false)} />
								<NavLink href="/about" name="About" onClick={() => setNavOpen(false)} />
							</div>
							<div
								className={active ? "navbar-button active" : "navbar-button"}
								onClick={() => setActive(!active)}>
								<div className="navbar-button-bar"></div>
								<div className="navbar-button-bar"></div>
								<div className="navbar-button-bar"></div>
							</div>
						</div>
					</div>
				</div>
				<div className={active ? "mobile-navbar active" : "mobile-navbar"}>
					<div className={active ? "mobile-routes active" : "mobile-routes"}>
						<NavLink href="/" name="Home" onClick={() => [setNavOpen(false), setActive(!active)]} />
						<NavLink
							href="/about"
							name="About"
							onClick={() => [setNavOpen(false), setActive(!active)]}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
