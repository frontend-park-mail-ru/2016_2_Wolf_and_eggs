export function plural(number, forms, rule) {
  let num = number;
  if (typeof (number) === 'string') {
    num = parseInt(number, 0);
  }
  return forms[rule(num)];
}

export function russianPluralRule(number) {
  const lastDigit = number % 10;
  if (lastDigit === 1 && number !== 11) {
    return 0;
  }
  if ([2, 3, 4].indexOf(lastDigit) >= 0 && [12, 13, 14].indexOf(number) < 0) {
    return 1;
  }
  return 2;
}
