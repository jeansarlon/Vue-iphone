
import GitHubUser from './GitHubUser'
import MoreInfo from './MoreInfo'

export default [
   {
      path: '/github',
      name: 'github',
      component: GitHubUser
   }, {
      path: '/moreinfo/:user',
      name: 'more-info',
      component: MoreInfo
   }
]
