/** @format */

import * as auth from './endpoints/auth';
import * as goods from './endpoints/goods';
import * as basket from './endpoints/basket';
import * as orders from './endpoints/orders';

export default {
  ...auth,
  ...goods,
  ...basket,
  ...orders,
};
