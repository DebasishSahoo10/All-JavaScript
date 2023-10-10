const restExample = (a, ...rest) => {
  console.log(a, rest.length); // 2, 8
};
console.log(restExample(2, 3, 4, 5, 6, 7, 8, 9, 10));
// Yes, things like this are possible because rest inside the function is an array