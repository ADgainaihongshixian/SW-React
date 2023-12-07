import { PATH, PATH_COMPANY_LIST, PATH_HOME, PATH_PRODUCT_LIST, PATH_TOOLS } from '@/utils/router';

export const routers = [
  {
    // to: [PATH,PATH_HOME],
    to: PATH,
    com: ()=> import('../pages/home')
  },
  {
    to: PATH_PRODUCT_LIST,
    com: ()=> import('../pages/home')
  },
  {
    to: PATH_COMPANY_LIST,
    com: ()=> import('../pages/home')
  },
  {
    to: PATH_TOOLS,
    com: ()=> import('../pages/home')
  },
];