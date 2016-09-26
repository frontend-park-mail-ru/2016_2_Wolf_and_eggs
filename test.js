import plural from './public/plural';
import matFilter from './public/filter';

const assert = require('assert');

const rusOne = ['раз', 'раза', 'раз'];

assert.equal(plural(0, rusOne, 'rus'), 'раз');
assert.equal(plural(1, rusOne, 'rus'), 'раз');
assert.equal(plural(2, rusOne, 'rus'), 'раза');
assert.equal(plural(13, rusOne, 'rus'), 'раз');
assert.equal(plural(15, rusOne, 'rus'), 'раз');
assert.equal(plural(100, rusOne, 'rus'), 'раз');

assert.equal(matFilter('love'), '****');
assert.equal(matFilter('banana'), '****');
assert.equal(matFilter('kitten'), '****');
assert.equal(matFilter('love you'), '**** you');
assert.equal(matFilter('you kitten'), 'you ****');
assert.equal(matFilter('suck my banana'), 'suck my ****');
assert.equal(matFilter('kitten love banana banana'), '**** **** **** ****');
