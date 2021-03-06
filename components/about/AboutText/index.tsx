import { calculateAge } from "../../../lib";

export const AboutText: React.FC = () => {
	const age = calculateAge();

	return (
		<div className="about-info">
			<h1 className="about-title">About Me</h1>
			<div className="about-text-items">
				<p className="about-text">
					Hi, I&apos;m Job, {age} year-old programmer from the Netherlands. The “computer nerd” of
					the family if you don&apos;t count my brother then😶. I began programming when I was 12
					and I haven&apos;t stopped ever since. In my free time <del>I sleep a lot</del>😅, watch a
					lot and I mean a lot of anime or play games. I also do sports, Hockey and I&apos;m pretty
					good at it😀. That&apos;s all I wanna say about my live. There are not many things I want
					to say about my life🐒👍🏾.
				</p>
			</div>
		</div>
	);
};
