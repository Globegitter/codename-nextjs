// var {Resource} = require('nord'); // eslint-disable-line
import {Resource} from 'nord';

export default class Cards extends Resource{
  get() {
    console.log('in get function');
    return this.res.json({text: 'woohhooo get!'});
  }
}
