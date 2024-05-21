function function1() {
  const value1 = 1;
  function function2() {
    const value2 = 2;
    console.log(value1);
    function function3() {
      console.log(value1);
      console.log(value2);
    }
    function3();
  }
  function2();
}
