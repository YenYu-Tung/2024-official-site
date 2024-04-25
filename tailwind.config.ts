import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            }, 
            fontSize: {
                xs: ['12px', '40px'],
                sm: ['14px', '40px'],
                base: ['16px', '40px'],
                lg: ['18px', '40px'],
                xl: ['20px', '40px'],
                '2xl': ['24px', '40px'],
                '3xl': ['32px', '40px'],
                '4xl': ['36px', '40px'],
                '5xl': ['48px', '40px']
            },
        },
    },
    plugins: [nextui()],
}
export default config
