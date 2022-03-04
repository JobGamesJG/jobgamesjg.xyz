/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

const Navbar: React.FC = () => {
	const [active, setActive] = useState(false);
	useEffect(() => window.addEventListener("scroll", () => setActive(window.scrollY > 20)), []);

	return (
		<div className="navbar-wrapper">
			<div className={active ? "navbar active" : "navbar"}>
				<div className="navbar-content">
					<div className="navbar-logo">
						<img
							className="navbar-img"
							src="https://lh3.googleusercontent.com/ogw/ADea4I56cV0MI-3fEb1-xju9CNHA1Dmjnli66rEgwU-hsQ=s256-c-mo"
							alt=""
						/>
						<p className="navbar-logo-text">JobGamesJG</p>
					</div>
					<div className="navbar-routes">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/about">About</NavLink>
						<NavLink href="/minecraft">Minecraft</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
