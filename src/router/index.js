import Login from '@/components/Login'
import Cake from '@/components/Cake'
import Img from '@/components/Img'
import Memories from '@/components/Memories'
import Label from '@/components/Label'

const routes = [{
  path: '/',
  component: Login
}, {
  path: '/cake',
  name: 'Cake',
  component: Cake
}, {
  path: '/img',
  name: 'Img',
  component: Img
},
{
  path: '/label',
  name: 'label',
  component: Label
},
{
  path: '/memories',
  name: 'Memories',
  component: Memories
}]

export default routes
