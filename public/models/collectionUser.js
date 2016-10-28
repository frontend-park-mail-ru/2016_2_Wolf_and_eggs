import Model from './Model';
import User from './user';

export default class collectionUser extends Model {

  constructor(attributes) {
    super(attributes);
    this.data = [];
    this.numberPage = 0;

    // this.signup = this.signup.bind(this);
  }

  get urlScorebord() {
    return '/api/best';
  }

  getUsers() {
    const result = this.send(this.urlScorebord, {page: this.numberPage}, 'GET');
    const obj = JSON.parse(result);

    obj.forEach(value => {
      this.data.push(new User(value));
    });

    console.log(obj, this.data);
  }

}