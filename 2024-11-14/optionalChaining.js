const person = {
  name: "John",
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
  sayHello: () => "test",
};

//함수에 대해서도 이렇게 옵셔널 체이닝이 가능.
console.log(person.sayHello?.());

//한마디로 이게
if (person?.sayHello) {
  person.sayHello();
}

//이거다
person?.sayHello?.();

const food = {
  breakfast: {
    meal: "apple",
    desert: {
      drink: "juice",
    },
  },
  lunch: {
    drink: "coffee",
    meal: "pasta",
  },
};

//이건
console.log(food.lunch && food.lunch.desert && food.lunch.desert.drink);

//이거다!
console.log(food.lunch?.desert?.drink);

food.breakfast?.["meal"]; // 이런것도 가능함
