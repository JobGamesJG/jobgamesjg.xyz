import "../styles/index.scss";
import "tippy.js/dist/tippy.css";

import type { AppProps } from "next/app";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
