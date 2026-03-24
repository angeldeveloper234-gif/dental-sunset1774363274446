import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FFFFFF",
                foreground: "#1F2937", // Gray-800
                primary: {
                    DEFAULT: "#0056B3", // Medical Blue
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#28A745", // Soft Green
                    foreground: "#FFFFFF",
                },
                surface: "#F8FAFC", // Slate-50
                border: "#E2E8F0", // Slate-200
            },
            fontFamily: {
                sans: ["Nunito", "sans-serif"],
                display: ["Poppins", "sans-serif"],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            }
        },
    },
    plugins: [],
}

export default config