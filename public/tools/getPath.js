/**
 * Created by utrobin on 26.10.16.
 */
let path = Object.keys(window.fest)[0];
path = path.slice(0, path.indexOf("public")) + 'public/';
export default path;