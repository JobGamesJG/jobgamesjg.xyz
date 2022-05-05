import React, { useEffect, useState } from "react";

const Socials: React.FC = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<p className="socials-button" onClick={() => setActive(!active)}>
				{"Socials >"}
			</p>
			<div className={active ? "socials-wrapper active" : "socials-wrapper"}>
				<div className="socials">
					<div className="socials-placement">
						<div className="socials-header">
							<p>Socials</p>
							<a onClick={() => setActive(!active)}>
								<i className="fas fa-times"></i>
							</a>
						</div>
						<div className="socials-items">
							<a href="https://discord.com/users/679240313952403457">
								<i className="fab fa-discord"></i> Discord
							</a>
							<a href="https://github.com/JobGamesJG">
								<i className="fab fa-github"></i> Github
							</a>
							<a href="https://www.youtube.com/channel/UCB76PdQLx9wg4DCKbsVhyvA">
								<i className="fab fa-youtube"></i> Youtube
							</a>
							<a href="https://www.twitch.tv/jobgamesjg">
								<i className="fab fa-twitch"></i> Twitch
							</a>
							<a href="https://twitter.com/JobGamesJG">
								<i className="fab fa-twitter"></i> Twitter
							</a>
							<a href="https://www.instagram.com/jobgamesjg/">
								<i className="fab fa-instagram"></i> Instagram
							</a>
							<a href="https://www.tiktok.com/@jobgamesjg">
								<i className="fab fa-tiktok"></i> TikTok
							</a>
							<a href="https://www.reddit.com/user/JobGamesJG">
								<i className="fab fa-reddit"></i> Reddit
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Socials;
