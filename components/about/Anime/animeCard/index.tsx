import { motion, useAnimation, Variants } from "framer-motion";
import type { AnimeList } from "../../../../lib";
import React, { useEffect, useState } from "react";

type Props = AnimeList & { number: number };

export const AnimeCard: React.FC<Props> = (props) => {
	const [active, setActive] = useState(false);
	const [hover, setHover] = useState(false);
	const control = useAnimation();

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
			padding: 10,
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
		enabled: {
			padding: 10,
			opacity: 1,
			transition: {
				duration: 0.3,
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
			onHoverStart={active ? () => setHover(false) : () => setHover(true)} //{() => setHover(true)}
			onHoverEnd={() => setHover(false)}
			variants={variants}
			initial="initial"
			animate="animate"
			className="anime-card"
			onClick={active ? () => setHover(false) : () => setHover(!hover)}>
			<div className={`anime-popup-wrapper ${active ? "active" : ""}`.trim()}>
				<div className={`anime-popup ${active ? "active" : ""}`.trim()}>
					<div className="anime-popup-inner">
						<div className="popup-placement">
							<div className="popup-header">
								<a className="popup-title" onClick={() => window.open(props.url)}>
									<i className="fa-solid fa-arrow-up-right-from-square"></i>
									<p className="popup-text">{props.title}</p>
								</a>
								<a onClick={() => setActive(!active)}>
									<i className="fas fa-times"></i>
								</a>
							</div>
							<div className="popup-info">
								<div className="popup-item">
									<p className="popup-text">status:</p>
									<p className="popup-prop">{props.status}</p>
								</div>
								<div className="popup-item">
									<p className="popup-text">eps:</p>
									<p className="popup-prop">
										{props.eps_watchted} / {props.eps_num}
									</p>
								</div>
								<div className="popup-item">
									<p className="popup-text">rating:</p> <p className="popup-prop">{props.rating}</p>
								</div>
								<div className="popup-item">
									<p className="popup-text">type:</p>
									<p className="popup-prop">{props.animeType}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img src={props.img} alt="" className="anime-img" />
			<div
				onClick={() => setActive(!active)}
				className={`anime-info ${hover ? "active" : ""}`.trim()}>
				<p className="anime-title">{props.title}</p>
			</div>
		</motion.div>
	);
};

// {/* <div className={`anime__eps-value ${hover ? "active" : ""}`.trim()}>
// 						<a className="anime-title-link">
// 							<p className="anime-title main" onClick={() => window.open(props.url)}>
// 								{props.title}
// 							</p>
// 						</a>

// 						<div className="anime-status">
// 							<div className="placement-1">
// 								<p className="anime-eps-total">
// 									Eps {props.eps_watchted} / {props.eps_num}
// 								</p>
// 								<p className="anime-watching">
// 									<i className={props.icon} style={{ color: props.colour }} /> {props.status}
// 								</p>
// 							</div>
// 							<div className="placement-2">
// 								<p className="anime-type">
// 									{props.animeType} <i className={props.animeTypeIcon}></i>
// 								</p>
// 								<p className="anime-rating">
// 									{props.rating} <i className="fas fa-star"></i>
// 								</p>
// 							</div>
// 						</div>
// 					</div> */}
