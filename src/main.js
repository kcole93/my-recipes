// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import '~/assets/css/mystyles.css';
import VueSimpleMarkdown from 'vue-simple-markdown'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Buefy)
  Vue.use(VueSimpleMarkdown)
  Vue.use(require('vue-shortkey'))

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  })
}
