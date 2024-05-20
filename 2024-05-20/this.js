const morePracticeAboutThis = {
  name: "heeeee",
  age: 29,
  method: function () {
    /*
      {
        name: 'heeeee',
        age: 29,
        method: [Function: method],
        arrowMethod: [Function: arrowMethod]
      }
    */
    console.log(this);
  },
  arrowMethod: () => {
    /*
      window객체. this가 최상위 컨텍스트를 참조
    */
    console.log(this);
  },
};

morePracticeAboutThis.arrowMethod();

const thisObject = {
  name: "heeeee",
  method: function () {
    // name: () => {};
    console.log(this);
  },
};

thisObject.method();
