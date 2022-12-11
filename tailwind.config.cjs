const { screens } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			xs: '475px',
			...screens
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
