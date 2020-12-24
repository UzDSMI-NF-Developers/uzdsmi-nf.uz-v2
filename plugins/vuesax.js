import Vue from 'vue'
import Vuesax from 'vuesax'

const colors = require('tailwindcss/colors')

Vue.use(Vuesax, {
  colors: {
    primary: colors.teal[500],
    success: colors.green,
    danger: colors.red,
    warning: colors.yellow,
    dark: '#1e1e1e',
  },
})
