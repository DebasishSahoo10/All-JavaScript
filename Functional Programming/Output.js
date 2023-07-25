// 1 : Two IIFEs at once
(function testIIFE(x) {
  return (function IIFE(y) {
    console.log(x); // 2
  })(1);
})(2);

// 2 : Rest params will alwys go last
// const fn = (a, ...nums, x) => {
//     console.log(nums)
// } // this will throw an error