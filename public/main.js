'use strict';

function onSubmit(form) {
	let data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value,
	};


	// if (result === '100'){
	//     form.hidden = true;
	// }

	let result = request('/users', data);
	let obj = JSON.parse(result);
	let count = obj.count;
	let name = obj.name;

	window.welcome.innerHTML = plural(count);
	doIt(name);
}

function plural(count) {
	if (count == 0) {
		return "Здравствуй, дух";
	}
	if (count == 1) {
		return "Рады приветствовать на нашем курсе!";
	}
	if (count > 1 && count < 15) {
		return "Кликай дальше!! Еще осталось " + (15 - count) + " раз(а)";
	}

	else {
		return "01001000 01101001 00101100 00100000 01100010 01110010 01101111";
	}
}

function hello (arg) {
	return "Привет, " + arg;
}

if (typeof exports === 'object') {
	exports.hello = hello;
	exports.plural = plural;
}