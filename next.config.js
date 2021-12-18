/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects() {
		return [
			{
				source: "/bedankt-bezorger",
				destination: "https://tikkie.me/pay/sqql5191j37oi3kog5rd?",
				permanent: false,
			},
		];
	},
}
