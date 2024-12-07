import animations from 'tailwindcss-animated'
import flowbite from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'orange': '#ed8e1c',
				'gray': '#cccccc',
				'gray-dark': '#212529',
				'gray-light': '#333333',
				'gray-light-2': '#eeeeee',
				'tahiti': '#3ab7bf',
				'silver': '#ecebff',
				'bubble-gum': '#ff77e9',
				'bermuda': '#78dcca',
				primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
			},
			animation: {
				'loop-scroll': 'loop-scroll 50s linear infinite',
			},
			keyframes: {
				'loop-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				}
			}      
		},
	},
	plugins: [
		flowbite,
		animations
	],
}