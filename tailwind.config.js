const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const lineClamp = require('@tailwindcss/line-clamp');
const forms = require('@tailwindcss/forms');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      // 'adobe-1': '#C45414',
      // 'adobe-2': '#8F5939',
      // 'adobe-3': '#77340C',
      // 'adobe-4': '#C47A4F',
      // 'adobe-5': '#471F07',
      'adobe-1': '#FFE548',
      'adobe-2': '#14665f',
      'adobe-3': '#D66853',
      'adobe-4': '#E9B8AC',
      'adobe-5': '#7A272B',
      // Primary
      'yellow-050': '#FFFAEB',
      'yellow-100': '#FCEFC7',
      'yellow-200': '#F8E3A3',
      'yellow-300': '#F9DA8B',
      'yellow-400': '#F7D070',
      'yellow-500': '#E9B949',
      'yellow-600': '#C99A2E',
      'yellow-700': '#A27C1A',
      'yellow-800': '#7C5E10',
      'yellow-900': '#513C06',
      // Neutrals
      'gray-050': '#F7F7F7',
      'gray-100': '#E1E1E1',
      'gray-200': '#CFCFCF',
      'gray-300': '#B1B1B1',
      'gray-400': '#9E9E9E',
      'gray-500': '#7E7E7E',
      'gray-600': '#626262',
      'gray-700': '#515151',
      'gray-800': '#3B3B3B',
      'gray-900': '#222222',
      // Supporting
      'blue-050': '#DCEEFB',
      'blue-100': '#B6E0FE',
      'blue-200': '#84C5F4',
      'blue-300': '#62B0E8',
      'blue-400': '#4098D7',
      'blue-500': '#2680C2',
      'blue-600': '#186FAF',
      'blue-700': '#0F609B',
      'blue-800': '#0A558C',
      'blue-900': '#003E6B',
      'orange-050': '#FFEFE6',
      'orange-100': '#FFD3BA',
      'orange-200': '#FAB38B',
      'orange-300': '#EF8E58',
      'orange-400': '#E67635',
      'orange-500': '#C65D21',
      'orange-600': '#AB4E19',
      'orange-700': '#8C3D10',
      'orange-800': '#77340D',
      'orange-900': '#572508',
      'red-050': '#FFEEEE',
      'red-100': '#FACDCD',
      'red-200': '#F29B9B',
      'red-300': '#E66A6A',
      'red-400': '#D64545',
      'red-500': '#BA2525',
      'red-600': '#A61B1B',
      'red-700': '#911111',
      'red-800': '#780A0A',
      'red-900': '#610404',
      'green-050': '#E3F9E5',
      'green-100': '#C1EAC5',
      'green-200': '#A3D9A5',
      'green-300': '#7BC47F',
      'green-400': '#57AE5B',
      'green-500': '#3F9142',
      'green-600': '#2F8132',
      'green-700': '#207227',
      'green-800': '#0E5814',
      'green-900': '#05400A',
    },
    extend: {},
  },
  variants: {
    extend: {
      gridColumnStart: ['odd'],
      gridRowStart: ['odd'],
    },
  },
  plugins: [typography, aspectRatio, lineClamp, forms],
};
