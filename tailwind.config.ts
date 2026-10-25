import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FFFFFF",
                foreground: "#18334F",
                navy: "#152542",
                ivory: "#FFFFFF",
                peach: "#286CFD",
                softblue: "#EEF3FF",
                white: "#FFFFFF",      // Pure White for clear elements
                primary: {
                    DEFAULT: "#286CFD",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#DCE7FF",
                    foreground: "#152542",
                },
                accent: "#286CFD",
                dark: "#152542",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
            borderRadius: {
                'xl': '1.5rem',
                '2xl': '2.5rem',
                '3xl': '4rem',
            }
        },
    },
    plugins: [],
}

export default config
