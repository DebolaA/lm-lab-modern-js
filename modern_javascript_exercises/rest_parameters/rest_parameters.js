// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...rest) {
  // Add a loop here
  return rest.reduce((acc, currentVal) => (acc += currentVal), 0);
  // return a + b;
}

add(1, 2, 3, 4, 5);
