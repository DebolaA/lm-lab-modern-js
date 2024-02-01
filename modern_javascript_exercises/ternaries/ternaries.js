// Instructions can be found in ternaries.md

export function sayHello(name) {
  // if (name === undefined) {
  //   return "Hello, you!";
  // } else return "Hello, " + name + "!";

  const result = name ? "Hello, " + name + "!" : "Hello, you!";
  return result;
}
