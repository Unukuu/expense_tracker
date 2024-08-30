const a = {
  name: "nara",
  email: "nara@gmail.com",
  age: 11,
};

const keys = Object.keys(a);
const cc = keys.map((key) => `${key}='${a[key]}'`).join();

console.log("KEY", keys);
console.log("CC", cc);
console.log("VAL", Object.values(a));
