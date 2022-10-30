/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,tsx, ts, jsx}"],
	theme: {
		extend: {
			colors: {
				orange: "hsl(26, 100%, 55%)",
				paleOrange: "hsl(25, 100%, 94%)",
				veryDarkBlue: "hsl(220, 13%, 13%)",
				darkGrayishBlue: "hsl(220, 14%, 75%)",
				lightGrayishBlue: "hsl(223, 64%, 98%)",
				white: "hsl(0, 0%, 100%)",
			},
		},
	},
	plugins: [],
}
