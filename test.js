let assert = require('assert');
let plural = require('./public/main').plural;
let filter = require('./public/filter').filter;

assert.equal(plural(0, 'Егор'), 'Здравствуйте Егор, вы вошли 0 раз');
assert.equal(plural(1, 'Павел'), 'Здравствуйте Павел, вы вошли 1 раз');
assert.equal(plural(2, 'Егор'), 'Здравствуйте Егор, вы вошли 2 раза');
assert.equal(plural(13, 'Егор'), 'Здравствуйте Егор, вы вошли 13 раз');
assert.equal(plural(15, 'Егор'), 'Здравствуйте Егор, вы вошли 15 раз');
assert.equal(plural(100, 'Егор'), 'Здравствуйте Егор, вы вошли 100 раз');

global.window = {
  rules: ['fuck', 'dick', 'cunt']
}

assert.equal(filter('fuck'), '****');
assert.equal(filter('dick'), '****');
assert.equal(filter('cunt'), '****');
assert.equal(filter('fuck you'), '**** you');
assert.equal(filter('you cunt'), 'you ****');
assert.equal(filter('suck my dick'), 'suck my ****');
assert.equal(filter('cunt fuck dick dick'), '**** **** **** ****');
