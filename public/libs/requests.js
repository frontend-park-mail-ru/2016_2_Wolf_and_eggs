export function postRequest(url, data) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', url, false);
    //xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(`login=${data.login}&password=${data.password}`);
	return xhr.responseText;
}

export function getRequest(url, data) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  console.log(JSON.parse(xhr.responseText));
}
