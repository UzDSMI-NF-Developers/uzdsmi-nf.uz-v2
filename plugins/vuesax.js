import Vue from 'vue'
import Vuesax from 'vuesax'

import { colors } from 'tailwindcss/defaultTheme'

Vue.use(Vuesax, {
  colors: {
    primary: colors.teal[500],
    success: colors.green[500],
    danger: colors.red[500],
    warning: colors.yellow[500],
    dark: '#1e1e1e',
  },
})
