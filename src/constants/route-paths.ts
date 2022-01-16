export const Paths = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  CAMPAIGNS: {
    HOME: '/campaign/:type',
    DETAILS: '/campaign/:type/details',
    MANAGE: '/campaign/:type/manage',
  },
  DASHBOARD: {
    HOME: '/dashboard',
    USERS: {
      CREATE: '/dashboard/users/create',
      UPDATE: '/dashboard/users/update',
      LIST: '/dashboard/users/list',
    },
    CATEGORIES: {
      CREATE: '/dashboard/categories/create',
      UPDATE: '/dashboard/categories/update',
      LIST: '/dashboard/categories/list',
    },
    PRODUCTS: {
      CREATE: '/dashboard/products/create',
      UPDATE: '/dashboard/products/update',
      LIST: '/dashboard/products/list',
    },
    CUSTOMERS: {
      CREATE: '/dashboard/customers/create',
      UPDATE: '/dashboard/customers/update',
      LIST: '/dashboard/customers/list',
    },
    SALES: {
      CREATE: '/dashboard/sales/create',
      UPDATE: '/dashboard/sales/update',
      LIST: '/dashboard/sales/list',
    },
  }
};
