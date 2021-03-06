import "../styles/index.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<motion.div
					key={router.route}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.5,
							ease: [0.6, -0.05, 0.01, 0.99],
						},
					}}
					exit={{ opacity: 0 }}>
					<Component {...pageProps} />
					<Footer />
				</motion.div>
			</AnimatePresence>
		</>
	);
}

export default MyApp;
