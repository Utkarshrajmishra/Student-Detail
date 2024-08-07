/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        jet: '#343434',
        onyx: '#353935',
        eerie_black_2: '#1e1e1f',
        eerie_black_1: '##202022',
        smoky_black: '#121212',
        white_1: '#ffffff',
        white_2: '#fafafa',
        orange_yellow_crayalo: '#ffdb70',
        vegas_gold: '#ceb15a',
        light_ray: '#d6d6d6',
        bittersweet_shimmer: '#b84c4c',
        light_gray_70: '#d6d6d6',
      },
    },
  },
  plugins: [],
};
