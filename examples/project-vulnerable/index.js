// sample file — run eslint on this to trigger the plugin
function hello(name) {
  var unused = "this variable is never used";
  return `Hello, ${name}!`;
}

module.exports = { hello };
