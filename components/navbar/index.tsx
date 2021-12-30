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
							src="https://cdn.jobgamesjg.tk/files/pfp.gif?raw=true"
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
