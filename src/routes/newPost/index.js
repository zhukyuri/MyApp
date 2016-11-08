/**
 * Created by administrator on 23.10.16.
 */

import React from 'react';
import NewPost from './NewPost';

const title = 'Нова Почта';

export default {

  path: '/newpost',

  action() {
    return {
      title,
      component: <NewPost title={title}/>
    }
  }

}

