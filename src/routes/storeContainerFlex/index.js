/**
 * Project sample and testing components
 * Created by Yuriy Zhuk on 19.11.16.
 */

import React from 'react';
import StoreContainerFlex from './StoreContainerFlex';

const title = 'Тест магазину';

export default {

  path: '/store-test',

  action() {
    return {
      title,
      component: <StoreContainerFlex title={title} />
    }
  }
}

