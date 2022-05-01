import { motion, useAnimation, Variants } from "framer-motion";
import type { AnimeList } from "../../../../lib";
import React, { useEffect, useState } from "react";

type Props = AnimeList & { number: number };

export const AnimeCard: React.FC<Props> = (props) => {
	const [hover, setHover] = useState(false);
	const control = useAnimation();
	console.log(props.title.length);

	const variants: Variants = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 0.5 + 0.2 * (props.number % 10 || 10),
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	const variants2: Variants = {
		disabled: {
			height: 0,
			padding: 10,
			opacity: 0,
			transition: {
				duration: 0.5,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
		enabled: {
			height: 130,
			padding: 10,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	useEffect(() => {
		if (hover) void control.start("enabled");
		else void control.start("disabled");
	}, [control, hover]);

	return (
		<motion.div
			onHoverStart={() => setHover(true)}
			onHoverEnd={() => setHover(false)}
			variants={variants}
			initial="initial"
			animate="animate"
			className="anime-card"
			onClick={() => setHover(!hover)}>
			<div className="anime-img-info">
				<img src={props.img} alt="" className="anime-img" />
				<motion.div animate={control} variants={variants2} initial="disabled" className="anime-eps">
					<div className={`anime__eps-value ${hover ? "active" : ""}`.trim()}>
						<a className="anime-title-link">
							<p className="anime-title main" onClick={() => window.open(props.url)}>
								{props.title}
							</p>
						</a>

						<div className="anime-status">
							<div className="placement-1">
								<p className="anime-eps-total">
									Eps {props.eps.count} / {props.eps.max}
								</p>
								<p className="anime-watching">
									<i className={props.icon} style={{ color: props.colour }} /> {props.status}
								</p>
							</div>
							<div className="placement-2">
								<p className="anime-type">
									{props.animeType} <i className={props.animeTypeIcon}></i>
								</p>
								<p className="anime-rating">
									{props.rating} <i className="fas fa-star"></i>
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
			<a className="anime-title-link" onClick={() => window.open(props.url)}>
				<h3 className="anime-title">
					<i className={props.icon} style={{ color: props.colour }} /> {props.title}
				</h3>
			</a>
		</motion.div>
	);
};
