// var {Resource} = require('nord'); // eslint-disable-line
import {Resource} from 'nord';

export default class SpendPredict extends Resource{
  get() {
    return this.res.json({text: 'woohhooo this is in the get function!'});
  }
}
