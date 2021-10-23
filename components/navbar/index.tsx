import Image from "next/image";
import NavLink from "./NavLink";

const Navbar: React.FC = () => {
	return (
		<div className="navbar-wrapper">
			<div className="navbar-content">
				<div style={{ display: "flex" }}>
					<div className="navbar-logo">
						<Image className="navbar-img" src="/favicon.ico" alt="" width={50} height={50} />
					</div>
					<NavLink href="/">
						<a className="navlink-text">JobGamesJG</a>
					</NavLink>
				</div>
				<div className="navbar-links">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/about">About</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
