/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

//import ApiNovaPochta from '../ApiNovaPochta/ApiNovaPochta';
import ApiNovaPochta from 'yz-react-deliveri-newpochta';

function Feedback() {

  const apiKey = 'a044d0f647b24e6a5fc8ab8e0d69b0a8';

  const cb = (res) => {
//    console.log('colback: *********************************************************************************************');
//    console.log('colback: ', res);
//    console.log('colback: *********************************************************************************************');
  };

  const foo = new ApiNovaPochta(apiKey);
//  foo.getAreas(cb, apiKey);
//  foo.getSettlements(cb, apiKey);
//  foo.getCities(cb, apiKey);
//  foo.getWarehouses(cb, apiKey);
//  foo.getWarehouseTypes(cb, apiKey);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <a
          className={s.link}
          href="https://gitter.im/kriasoft/react-starter-kit"
        >Ask a question</a>
        <span className={s.spacer}>|</span>
        <a
          className={s.link}
          href="https://github.com/kriasoft/react-starter-kit/issues/new"
        >Report an issue</a>
      </div>
    </div>
  );
}

export default withStyles(s)(Feedback);
