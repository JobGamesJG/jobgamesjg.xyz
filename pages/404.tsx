import Head from "next/head";
import { motion } from "framer-motion";
import React from "react";

const Landing: React.FC = () => {
	return (
		<>
			<Head>
				<title>404 - Not Found</title>
			</Head>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
				}}
				style={{ width: "100vw", height: "100vh", display: "grid", placeItems: "center" }}>
				<img
					style={{ borderRadius: "10px", marginTop: "10rem" }}
					className="404-img"
					src="https://cdn.jobgamesjg.tk/S4M2_7wt/cat_loading.png"
					alt=""
				/>
				<p style={{ marginBottom: "50rem" }}>Why wrong page?</p>
			</motion.div>
		</>
	);
};

export default Landing;
