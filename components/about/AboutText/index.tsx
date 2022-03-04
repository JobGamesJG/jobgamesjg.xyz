import { calculateAge } from "../../../lib";

export const AboutText: React.FC = () => {
	const age = calculateAge();

	return (
		<div className="about-info">
			<h1 className="about-title">About Me</h1>
			<div className="about-text-items">
				<p className="about-text">
					Hello, my name Job Klarenbeek, but I&apos;m mostly known as JobGamesJG. I am a {age}{" "}
					year-old programmer from the Netherlands and the creator of some awsome texture packs.
				</p>
				<p className="about-text">
					In my free time <del>I sleep a lot</del>, watch anime or play games. I also do sports,
					Hockey and I&apos;m pretty good at it.
				</p>
				<p className="about-text">
					That&apos;s all I wanna say about my live. There aren&apos;t any other special things I do
					besides programing and making texture packs, after all I am just a normal person.
				</p>
			</div>
		</div>
	);
};
