const name = "Susan";
const height = "39";
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
"test"; "mocha --timeout 5000 -R mocha-multi --reporter-options spec=-,json=.results.json"