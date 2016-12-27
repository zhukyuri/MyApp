/**
 * Project sample and testing components
 * Created by Yuriy Zhuk on 19.11.16.
 */

import React from 'react';
import Layout from  '../../components/Layout';
import ItemBlock from '../../components/storeBH/itemBlock/ItemBlock';
import s from './StoreContainerFlex.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class StoreContainerFlex extends React.Component {

  render() {
    return (
      <Layout>


        <div className={s.container}>

          <div className={s.item}>
            <ItemBlock/>
          </div>

          <div className={s.item}>
            <ItemBlock/>
          </div>

          <div className={s.item}>
            <ItemBlock/>
          </div>

          <div className={s.item}>
            <ItemBlock/>
          </div>

          <div className={s.item}>
            <ItemBlock/>
          </div>

          <div className={s.item}>
            <ItemBlock/>
          </div>

          <div className={s.item}>
            <ItemBlock/>
          </div>

          <div className={s.item}>
            <ItemBlock/>
          </div>

        </div>
      </Layout>
    )
  }
}

export default withStyles(s)(StoreContainerFlex);
