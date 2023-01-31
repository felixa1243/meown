/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': {
                    'raw': '(max-width:640px)'
                }
            },
            colors:{
                'primary':'#FF74B1'
            }
        },
    },
    plugins: [],
}