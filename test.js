let assert = require('assert');
let plural = require('./public/main').plural;

assert.equal(plural(0, 'Егор'), 'Здравствуйте Егор, вы вошли 0 раз');
assert.equal(plural(1, 'Павел'), 'Здравствуйте Павел, вы вошли 1 раз');
assert.equal(plural(2, 'Егор'), 'Здравствуйте Егор, вы вошли 2 раза');
assert.equal(plural(13, 'Егор'), 'Здравствуйте Егор, вы вошли 13 раз');
assert.equal(plural(15, 'Егор'), 'Здравствуйте Егор, вы вошли 15 раз');
assert.equal(plural(100, 'Егор'), 'Здравствуйте Егор, вы вошли 100 раз');
