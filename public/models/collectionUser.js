import Model from './Model';
import User from './user';

export default class collectionUser extends Model {

  constructor(attributes) {
    super(attributes);
    this.data = [];
    this.numberPage = 1;

    this.getUsers = this.getUsers.bind(this);
  }

  get urlScorebord() {
    return '/api/best';
  }

  getUsers() {
    const result = this.send(this.urlScorebord, this.numberPage, 'GET');
    this.numberPage++;
    const obj = JSON.parse(result);

    this.data = [];
    obj.forEach(value => {
      this.data.push(new User(value));
    });

    return {
      data: this.data,
      remainingPages: +this.data[0].user.password - this.numberPage + 1,
      numberPage: this.numberPage
    };
  }

}