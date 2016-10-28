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

    obj.forEach(value => {
      this.data.push(new User(value));
    });

    console.log(+this.data[0].password - this.numberPage, this.data);
    return { data: this.data, remainingPages: +this.data[0].user.password - this.numberPage };
  }

}