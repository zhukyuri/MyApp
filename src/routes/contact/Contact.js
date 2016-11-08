/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Contact.css';

//import ApiNovaPochta from 'yz-react-deliveri-newpochta';
import FormNovaPochta from '../../components/ApiNP';

function Contact({ title}) {

  const apiKey = "a044d0f647b24e6a5fc8ab8e0d69b0a8";
  const props = { apiKey };

  return (
    <Layout>
      <div>
        <FormNovaPochta { ...props } />
        <div className={s.root}>
          <div className={s.container}>
            <h1>{title}</h1>
            <p>...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(Contact);
