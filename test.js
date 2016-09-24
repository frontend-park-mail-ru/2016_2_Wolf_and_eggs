import { plural, russianPluralRule } from './public/plural';
import matFilter from './public/filter';

const assert = require('assert');

const rusOne = ['раз', 'раза', 'раз'];

assert.equal(plural(0, rusOne, russianPluralRule), 'раз');
assert.equal(plural(1, rusOne, russianPluralRule), 'раз');
assert.equal(plural(2, rusOne, russianPluralRule), 'раза');
assert.equal(plural(13, rusOne, russianPluralRule), 'раз');
assert.equal(plural(15, rusOne, russianPluralRule), 'раз');
assert.equal(plural(100, rusOne, russianPluralRule), 'раз');

assert.equal(matFilter('fuck'), '****');
assert.equal(matFilter('dick'), '****');
assert.equal(matFilter('cunt'), '****');
assert.equal(matFilter('fuck you'), '**** you');
assert.equal(matFilter('you cunt'), 'you ****');
assert.equal(matFilter('suck my dick'), 'suck my ****');
assert.equal(matFilter('cunt fuck dick dick'), '**** **** **** ****');
