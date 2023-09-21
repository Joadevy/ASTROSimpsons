/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				yellow: "#fed90f",
				brown: "#d1b271",
				white: "#ffffff",
				blue: "#70d1fe",
				gray: "#424f46",
				background: "#653D34",
				bgCard: "#653D34",
		}
		},
	},
	plugins: [],
}
