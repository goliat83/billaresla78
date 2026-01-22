/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        fontFamily: {
            'serif': ['Outfit', 'sans-serif'],
            'sans': ['DM Sans', 'sans-serif'],
        },
        extend: {
            colors: {
                // Paleta azul oscuro / turquesa neón para Billares la 78
                'primary': {
                    50: '#e6fcff',
                    100: '#b3f5ff',
                    200: '#80eeff',
                    300: '#4de7ff',
                    400: '#1ae0ff',
                    500: '#00d9ff', // Turquesa neón principal
                    600: '#00b8d9',
                    700: '#0097b3',
                    800: '#00768c',
                    900: '#005566',
                },
                'dark': {
                    50: '#e8eaed',
                    100: '#c5c9d1',
                    200: '#9fa6b2',
                    300: '#798393',
                    400: '#5c697b',
                    500: '#3f4f64',
                    600: '#37465a',
                    700: '#2d3a4d',
                    800: '#242f40',
                    900: '#0f1724', // Azul muy oscuro (casi negro)
                    950: '#080c12', // Negro azulado
                },
                'accent': {
                    cyan: '#00fff2',
                    blue: '#00b8ff',
                    purple: '#8b5cf6',
                },
                'neon': {
                    cyan: '#00fff2',
                    blue: '#00d4ff',
                    glow: 'rgba(0, 217, 255, 0.5)',
                }
            },
            boxShadow: {
                'neon': '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)',
                'neon-lg': '0 0 30px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.4)',
                'neon-cyan': '0 0 20px rgba(0, 255, 242, 0.5)',
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(135deg, #0f1724 0%, #1a2332 50%, #0f1724 100%)',
                'gradient-neon': 'linear-gradient(135deg, #00d9ff 0%, #00fff2 100%)',
            },
        },
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            '2xl': '1400px',
            '3xl': '1700px',
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '540px',
                    },
                    '@screen md': {
                        maxWidth: '720px',
                    },
                    '@screen lg': {
                        maxWidth: '960px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1320px',
                    },
                },
            });
        },
    ],
}
