module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'cyan-light': '#CFFAFE',
        'cyan-med' : '#22D3EE',
        'green-str' : '#E5FCC2',
        'black-coffee' : '#594F4F',
        'mint-green' : '#547980',
        'toxic-green' : '#BFF098',
        'toxic-blue' : '#6FD6FF',
        'eternal-blue': '#09203F',
        'eternal-gray': '#537895',
        'black-lt': '#42275a',
        'black-dk': '#734b6d',
        'ivory':'#edf5e1'
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
