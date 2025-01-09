/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#c75d15',
			},
			fontFamily: {
				valky: ['"MTD Valky Bold"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
