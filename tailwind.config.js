/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    secondary: '#FFD6EC',
                    primary: '#FF74B1',
                    test:'#ff0000'
                }
            },
            fontFamily:{
                poppins:['Poppins']
            },
            screens: {
                'xs': {
                    'raw': '(max-width:640px)'
                }
            }
        },
    },
    plugins: [],
}