function filter(str, rules) {
  let result = `${str}`;

  const rulesRegex = rules.map(rule => (
    {
      regexp: new RegExp(`\\b${rule}\\b`, 'g'),
      length: rule.length,
    }
  ));

  rulesRegex.forEach((rule) => {
    result = result.replace(rule.regexp, (new Array(rule.length + 1)).join('*'));
  });

  return result;
}

export default function matFilter(str) {
  return filter(str, ['love', 'banana', 'kitten']);
}
