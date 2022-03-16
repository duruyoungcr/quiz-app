const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  mode: 'jit', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        light: '#85d7ff',
        DEFAULT: '#ffffff',
        dark: '#FBFBFB',
        darkest: '#F5F5F5',
      },
      red: {
        light: '#FFEDED',
        DEFAULT: '#F50808',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#F7F9FA',
        dark: '#828282',
        DEFAULT: '#F2F2F2',
        light: '#BDBDBD',
        lightest: '#E0E0E0',
      },
      yellow: {
        darkest: '#F9F9F9',
        dark: '#4F4F4F',
        DEFAULT: '#FFBF00',
        light: '#e0e6ed',
        lightest: '#F7BB03',
      },
      green: {
        dark: '#9B51E0',
        DEFAULT: '#27AE60'
      },
      black: {
        dark: '#4F4F4F',
        DEFAULT: '#333333',
        light: '#484848',
        lightest: '#272727'
      },
      pink: {
        light: '#FFEDED',
        DEFAULT: '#FFF2E3',
        dark: '#FDE0CD'
      }
    },
    fontFamily: {
      body: ['Inter', 'sans-serif'],
    },
    fontSize: {
      '3xs': '6px',
      '2xs': '10px',
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'xl': '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px'
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
  },
  plugins: []
}
