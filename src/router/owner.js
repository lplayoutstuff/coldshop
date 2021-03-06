import Index from '@/components/owner/Index'
import Create from '@/components/owner/Create'
import Products from '@/components/owner/Products'
import Edit from '@/components/owner/Edit'

export default {
  path: '/owner',
  component: Index,
  name: 'Owner',
  meta: {
    requiresAuth: true
  },
  children: [
    {
      path: 'create',
      name: 'create',
      component: Create
    },
    {
      path: 'products',
      name: 'Products',
      component: Products
    },
    {
      path: 'edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
}
