import { withRouter } from "next/router";
import { MouseEvent } from "react";

const NavLink = ({ router, href, children }: any) => {
	function prefetchPages() {
		if (typeof window !== "undefined") {
			router.prefetch(router.pathname);
		}
	}

	const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		router.push(href);
	};

	const isCurrentPath = router.pathname === href || router.asPath == href;

	return (
		<div style={{ display: "grid", placeItems: "center" }}>
			<a
				className={`navlink ${isCurrentPath ? "active" : ""}`.trim()}
				href={href}
				onClick={handleClick}
				style={{}}>
				{children}
			</a>
		</div>
	);
};

export default withRouter(NavLink);
