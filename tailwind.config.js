/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#2564CF',
				dark: '#414141',
				white: '#fff',
				light: '#FAF9F8',
				grey: '#868583',
			},
		},
	},
	plugins: [],
}
