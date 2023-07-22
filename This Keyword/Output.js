// 1
const user = {
  name: "a",
  getDetail() {
    const name = "b";
    return this.name;
  },
};
console.log(user.getDetail()); // "a"
// Why : because normal function declarations always to the parent object.

// 2
const user2 = {
  name: "a",
  getDetail: {
    name: "b",
    getName() {
      const name = "c";
      return this.name;
    },
  },
};
console.log(user2.getDetail.getName()); // "b"
// Why : same above explanation

// 3
const user3 = {
  name: "a",
  getDetail: {
    name: "b",
    getName: () => {
      const name = "c";
      return this.name;
    },
  },
};
console.log(user3.getDetail.getName()); // undefined
// why : Because Arrow functions doesn't have their own this reference, hence they will take the reference of a parent normal function declaration (without that it will point to window object), if that is not there then there will be no reference

// 4
const user4 = {
  name: "a",
  getName: () => {
    const name = "c";
    return this.name;
  },
};
console.log(user4.getName()); // undefined
// Why : same above explanation, then how to fix it

// 5
const user5 = {
  name: "a",
  getDetails() {
    const getName = () => this.name;
    return getName();
  },
};
console.log(user5.getDetails()); // "a"

// 6
function makeUser() {
  return {
    name: "JOHN",
    ref: this,
  };
}
const userOne = makeUser();
console.log(userOne.ref.name); // undefined
// why : because the place the fuction is called is global scope hence it will point to window object

// 7
const makeUser2 = () => {
  return {
    name: "JOHN",
    ref: this,
  };
};
const userTwo = makeUser();
console.log(userTwo.ref.name); // undefined
// In arrow functions nothing changes in this context, then how to fix this

// 8
const makeUser3 = () => {
  return {
    name: "JOHN",
    ref() {
      return this;
    },
  };
};
const userThree = makeUser();
console.log(userThree.ref().name); // JOHN

// 9
const user6 = {
  name: "dev",
  getName() {
    console.log(this.name);
  },
};
setTimeout(user6.getName(), 1000); // undefined
// why : because in the setTimeout (user6.getName()) worked like a callback, which have its own scope, and doesn't carry any reference from the actual object. How to fix it : wrap it arround a anonymous normal or arrow function

// 10
const user7 = {
  name: "dev",
  getName() {
    console.log(this.name);
  },
};
setTimeout(() => {
  user7.getName();
}, 1000); // dev

// 11
const user8 = {
  name: "dev",
  print: function () {
    return this.name;
  },
};
const newUser = user8.print;
console.log(newUser()); // undefined
// why : because newUser is just refering to the function and not the whole object, so it will depend on the scope it is been invoked for all its reference, here it is window object