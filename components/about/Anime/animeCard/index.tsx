import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import type { AnimeList } from "../../../../lib";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

type Props = AnimeList & { number: number };

interface click {
	onClick: () => void;
	isOpen: boolean;
}

export const AnimeCard: React.FC<Props> = (props) => {
	const [active, setActive] = useState(false);
	const [hover, setHover] = useState(false);
	const [modal, setModal] = useState(false);
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
			opacity: 0,
			transition: {
				duration: 0.05,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
		enabled: {
			opacity: 1,
			transition: {
				duration: 0.05,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	const variants2_5: Variants = {
		disabled: {
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.3,
				delay: 0.05,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
		enabled: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				delay: 0.05,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	useEffect(() => {
		if (modal) void control.start("enabled");
		else void control.start("disabled");
	}, [control, modal]);

	return (
		<div className="anime-card-wrapper">
			<AnimatePresence exitBeforeEnter>
				{active && (
					<motion.div
						animate={control}
						variants={variants2}
						initial="disabled"
						className={`anime-popup-wrapper ${active ? "active" : ""}`.trim()}>
						<div className={`anime-popup ${active ? "active" : ""}`.trim()}>
							<motion.div
								animate={control}
								variants={variants2_5}
								initial="disabled"
								className="anime-popup-inner">
								<div className="popup-placement">
									<div className="popup-header">
										<a className="popup-title" onClick={() => window.open(props.url)}>
											<i className="fa-solid fa-arrow-up-right-from-square"></i>
											<p className="popup-text">{props.title}</p>
										</a>
										<a onClick={() => [setModal(!modal), setTimeout(() => setActive(!modal), 200)]}>
											<i className="fas fa-times"></i>
										</a>
									</div>
									<div className="popup-info">
										<div className="popup-item">
											<p className="popup-text">status:</p>
											<p className="popup-prop">
												{props.status} <i className={props.icon}></i>
											</p>
										</div>
										<div className="popup-item">
											<p className="popup-text">eps:</p>
											<p className="popup-prop">
												{props.eps_watchted} / {props.eps_num}
											</p>
										</div>
										<div className="popup-item">
											<p className="popup-text">rating:</p>
											<p className="popup-prop">
												{props.rating} / 10 <i className="fa-solid fa-star"></i>
											</p>
										</div>
										<div className="popup-item">
											<p className="popup-text">type:</p>
											<p className="popup-prop">
												{props.animeType} <i className={props.statusIcon}></i>
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				onHoverStart={active ? () => setHover(false) : () => setHover(true)} //{() => setHover(true)}
				onHoverEnd={() => setHover(false)}
				variants={variants}
				initial="initial"
				animate="animate"
				className="anime-card"
				onClick={
					active
						? () => [setHover(false), setModal(false)]
						: () => [setHover(!hover), setModal(!modal)]
				}>
				<img src={props.img} alt="" className="anime-img" />
				<div
					onClick={() => setActive(!active)}
					className={`anime-info ${hover ? "active" : ""}`.trim()}>
					<p className="anime-title">{props.title}</p>
				</div>
			</motion.div>
		</div>
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
