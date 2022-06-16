import React, { useEffect, useState } from "react";
import { calculateAge } from "../../lib";
import NavLink from "./NavLink";

const Navbar: React.FC = () => {
	const [navOpen, setNavOpen] = useState(false);
	const [scroll, setScroll] = useState(false);
	const age = calculateAge();

	useEffect(() => window.addEventListener("scroll", () => setScroll(window.scrollY > 20)), []);

	return (
		<>
			<div className="navbar-wrapper">
				<div className={scroll ? "navbar active" : "navbar"}>
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
						<i
							className={navOpen ? "nav-button fas fa-times" : "nav-button fas fa-bars"}
							onClick={() => setNavOpen(!navOpen)}
						/>
					</div>
				</div>
			</div>
			<div className="break-line"></div>
		</>
	);
};

export default Navbar;
