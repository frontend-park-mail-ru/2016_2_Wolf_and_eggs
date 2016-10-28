/**
 * Created by utrobin on 27.10.16.
 */
export default class Model {

  constructor(attributes) {
    this.attributes = attributes;
  }

  get defaults() {
    return {};
  }

  get url() {
    return '/';
  }

  send(url, data, method = 'GET') {
      const xhr = new XMLHttpRequest();

      if(method === 'GET') {
        url += `?page=${data}`;
      }

      xhr.open(method, url, false);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
      return xhr.responseText;
  }

}
