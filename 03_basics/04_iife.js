// Immediately Invoked Function Epressions(IIFE)

(function chai() {
  // name IIFE
  console.log("DB CONNECTED");
})();

((name) => {
  console.log("DB CONNECTED TWO ${name}");
})("hitesh");
