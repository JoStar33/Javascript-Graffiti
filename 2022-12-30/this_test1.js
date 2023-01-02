function hello() {
  function hi() {
    console.log(this);
  }
  hi();
};

const helloArrow = () => {
  const hi = () => {
    console.log(this);
  }
  hi();
};
hello();
helloArrow();