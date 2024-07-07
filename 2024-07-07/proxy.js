"use strict";

const newObject = { b: "test", count: 0 };
const proxyTest = new Proxy(newObject, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    throw new Error("존재하지 않는 프로퍼티");
  },
  set(target, prop, value) {
    if (prop === "count") {
      console.log("카운터값 변경");
      target[prop] = value;
      return true;
    }
    throw new Error("허용되지않은 변경입니다.");
  },
});
// 존재하지 않는 프로퍼티
// console.log(proxyTest.c);

// 허용되지않은 변경입니다.
// proxyTest.b = 123;

// 카운터값 변경
proxyTest.count = 123;
console.log(proxyTest.count);
