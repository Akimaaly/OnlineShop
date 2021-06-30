/** @format */

import * as auth from './endpoints/auth';
import * as goods from './endpoints/goods';
import * as basket from './endpoints/basket';

export default {
  ...auth,
  ...goods,
  ...basket,
};
