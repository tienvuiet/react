"use strict";
const printName = (student) => {
    return `Ten toi la ${student.name}, toi ${student.age} va email cua toi la ${student.email}`;
};
const used = {
    name: "tien",
    age: 19,
    email: "tienxinhzai241@gmail.com"
};
console.log(printName(used));
