export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003A70', // Xanh Navy chuẩn logo (HEX #003A70, RGB 0 58 112, CMYK 100 80 31 15)
          dark: '#00264A',
          light: '#1B528A',
          tint80: '#33618D',
          tint60: '#6689AA',
          tint40: '#99B0C6',
          tint20: '#CCD8E2',
        },
        secondary: {
          DEFAULT: '#FFC84D', // Vàng chuẩn logo (HEX #FFC84D, RGB 255 200 77, CMYK 0 24 77 0)
          hover: '#F2B938',
          dark: '#D49B1E',
          tint80: '#FFD371',
          tint60: '#FFDE94',
          tint40: '#FFE9B8',
          tint20: '#FFF4DB',
        },
        accent: {
          DEFAULT: '#FFC84D',
          hover: '#F2B938',
          dark: '#D49B1E',
        },
        highlight: '#FFC84D',
        navy: '#003A70',
        gold: '#FFC84D',
        surface: '#FFFFFF',
        'surface-muted': '#F4F7FC',
        text: '#003A70',
        'text-muted': '#5D7186',
      },
      fontFamily: {
        heading: ['"Be Vietnam Pro"', 'sans-serif'],
        body: ['"Be Vietnam Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
