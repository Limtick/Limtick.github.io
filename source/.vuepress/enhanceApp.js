import moment from 'moment'
import overallComponents from './config/overall'
import VueSiteMap from './plugins/vuepress-sitemap'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  const { pages } = siteData
  Vue.use(VueSiteMap, {
    pages
  })

  overallComponents.forEach(page => {
    Vue.component(page.name, page)
  })

  Vue.prototype.$moment = moment
}