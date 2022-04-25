import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

interface Props {
	href: string;
	name: string;
	onClick(): void;
}

const NavLink: React.FC<Props> = ({ href, name, onClick }) => {
	const { asPath } = useRouter();
	const className = asPath === href ? "navbar-link active".trim() : "navbar-link";

	return (
		<Link href={href}>
			<a onClick={onClick} className={className}>
				{name}
			</a>
		</Link>
	);
};

export default NavLink;
