const themeDir = __dirname + '/../../';
// const defaultTheme = require('tailwindcss/defaultTheme')

const disabledCss = {
    'code::before': false,
    'code::after': false,
    'blockquote p:first-of-type::before': false,
    'blockquote p:last-of-type::after': false,
    pre: false,
    code: false,
    'pre code': false,
    'code::before': false,
    'code::after': false,
}

module.exports = {
    prefix: '',
    content: [
        `${themeDir}/hugo_stats.json`,
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: { css: disabledCss },
                sm: { css: disabledCss },
                lg: { css: disabledCss },
                xl: { css: disabledCss },
                '2xl': { css: disabledCss },
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
                'infinite-scroll-paused': 'none',
            },
            keyframes: {
                'infinite-scroll': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography'),require('@tailwindcss/aspect-ratio'),]
}