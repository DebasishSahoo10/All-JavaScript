// Pollyfill for forEach
Array.prototype.forEachCustom = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
const herArray = [1, 2, 3, 4];
herArray.forEachCustom((item) => {
  console.log(item);
});

// Pollyfill for map
Array.prototype.map = function (callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }
  return output;
};
const mapArray = [1, 2, 3, 4];
const mapArray2 = mapArray.map((item) => {
  return item * 2;
});
console.log(mapArray2);
