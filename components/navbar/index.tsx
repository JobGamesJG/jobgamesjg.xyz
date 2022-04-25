import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

const Navbar: React.FC = () => {
	const [navOpen, setNavOpen] = useState(false);
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
					<div className={navOpen ? "navbar-routes active" : "navbar-routes"}>
						<NavLink href="/" name="Home" onClick={() => setNavOpen(false)} />
						<NavLink href="/about" name="About" onClick={() => setNavOpen(false)} />
						<NavLink href="/projects" name="Projects" onClick={() => setNavOpen(false)} />
					</div>
					<i
						className={navOpen ? "nav-button fas fa-times" : "nav-button fas fa-bars"}
						onClick={() => setNavOpen(!navOpen)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
