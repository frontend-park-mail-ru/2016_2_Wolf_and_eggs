'use strict';

let inflectionWord = (word, gcase) => {
  try {
    let w = new RussianName(word);
    switch (gcase) {
      case 'gcaseIm':
        return w.fullName(w.gcaseIm);

      case 'gcaseRod':
        return w.fullName(w.gcaseRod);

      case 'gcaseDat':
        return w.fullName(w.gcaseIm);

      case 'gcaseVin':
        return w.fullName(w.gcaseVin);

      case 'gcaseTvor':
        return w.fullName(w.gcaseTvor);

      case 'gcasePred':
        return w.fullName(w.gcasePred);

      default:
        return word;
    }
  } catch (e) {
    return word + ' error'
  }
};

function onSubmit(form) {
  let data = {
    user: form.elements['user'].value,
    email: form.elements['email'].value,
  };

  let result = request('/users', data);
  let obj = JSON.parse(result);
  let count = obj.count;
  let name = obj.name;

  window.welcome.innerHTML = plural(count, name);
}

function plural(count, name) {
  if ((count % 10 == 2 || count % 10 == 3 || count % 10 == 4) && (count < 12 || count > 14)) {
    let temp = inflectionWord('раз', 'gcaseRod');
    return `Здравствуйте ${name}, вы вошли ${count} ${temp}`;
  }
  else {
    let temp = inflectionWord('раз', 'gcaseIm');
    return `Здравствуйте ${name}, вы вошли ${count} ${temp}`;
  }
}

if (typeof exports === 'object') {
  exports.inflectionWord = inflectionWord;
  exports.plural = plural;
}