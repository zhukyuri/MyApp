/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Promise from 'bluebird';
import fetch, { Request, Headers, Response } from 'node-fetch';
import { host } from '../../config';

fetch.Promise = Promise;
Response.Promise = Promise;

function localUrl(url) {
//  if (url.startsWith('//')) {
console.log('**************** ',url);
  if (url && url.length>=2 && (url[0]+url[1])==='//') {
    return `https:${url}`;
  }

//  if (url.startsWith('http')) {
  if (url && url.length>=4 && (url[0]+url[1]+url[2]+url[3])==='http') {
    return url;
  }

  return `http://${host}${url}`;
}

function localFetch(url, options) {
  return fetch(localUrl(url), options);
}

export { localFetch as default, Request, Headers, Response };
