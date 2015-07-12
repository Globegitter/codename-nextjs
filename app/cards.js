import Resource from '../src/Resource.js';

export default class Cards extends Resource{
  get() {
    console.log('in get function');
    this.res.json({text: 'woohhooo get!'});
    return 'blaaaa';
    // return this.res.json({text: 'woohhooo get!'});
  }
}
