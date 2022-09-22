module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		colors: {
			'bg-gray': rgb(51, 65, 85),
			'text-gray-900': rgb(17, 24, 39),
			'text-gray-700': rgb(55, 65, 81),
			'text-gray-500': rgb(107, 114, 128),
			
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
		},
		extend: {
			rounded: {
				'lg': '0.5rem',
			}
		}
	},
}