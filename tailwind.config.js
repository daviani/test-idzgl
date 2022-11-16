module.exports = {
    content   : ['./pages/**/*.{js,ts,jsx,tsx}',
               './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme   : {
        extend: {
            colors: {
                main: {
                    800: '#2E3440',
                    700: '#4C566A',
                    200: '#D8DEE9',
                    100: '#FCFDFF',
                    50 : '#E5E9F0'
                },
                sun : {
                    800: '#B48EAD',
                    500: '#BF616A',
                    300: '#EBCB8B'
                },
                blue: {
                    600: '#5E81AC',
                    300: '#8FBCBB'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins : []
}
