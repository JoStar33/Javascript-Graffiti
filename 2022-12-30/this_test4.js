class this_test {
  constructor(
    name, age, job
  ) {
    this.name = name;
    this.age = age;
    this.job = job;
  };
  jobHandler = function () {
    console.log(this.job);
  }
};

const newProgramer = new this_test("호세", 26, "개발자");

newProgramer.jobHandler();


class this_test2 {
  constructor(
    name, age, job
  ) {
    this.name = name;
    this.age = age;
    this.job = job;
  };
  jobHandler = () => {
    console.log(this.job);
  }
};

const newProgramer2 = new this_test2("호세", 26, "개발자");

newProgramer2.jobHandler();