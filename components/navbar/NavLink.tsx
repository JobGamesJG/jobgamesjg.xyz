import { useRouter } from "next/router";
import Link from "next/link";
import React, { MouseEvent } from "react";

interface Props {
	href: string;
}

const NavLink: React.FC<Props> = ({ href, children }) => {
	const router = useRouter();
	const isCurrentPath = router.pathname === href || router.asPath == href;

	return (
		<div style={{ display: "grid", placeItems: "center" }}>
			<Link href={href}>
				<a className={`navlink ${isCurrentPath ? "active" : ""}`.trim()}>{children}</a>
			</Link>
		</div>
	);
};

export default NavLink;
