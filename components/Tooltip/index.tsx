import Tippy from "@tippyjs/react";
import React, { JSXElementConstructor, ReactElement } from "react";

interface Props {
	content: string;
	children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
}

const Tooltip: React.FC<Props> = ({ content, children }) => {
	return (
		<Tippy
			className="discord-theme"
			content={content}
			theme="discord"
			arrow
			inertia
			animation="discord-anim"
			duration={[100, 100]}
			hideOnClick={false}>
			{children}
		</Tippy>
	);
};

export default Tooltip;
