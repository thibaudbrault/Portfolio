/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				redhat: '"Red Hat Mono", mono',
				atkinson: '"Atkinson Hyperlegible", sans-serif'
			}
		},
	},
	plugins: [],
}
