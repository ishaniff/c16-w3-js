// VERY HARD:
// Object prototype chain and prototypal inheritance exercise.
// Create a Person constructor that has three properties: name, job, and age.
// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.
// const person1 = new Person("Harold", "Backend Engineer", 20);
// const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
// const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
// const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
// c1.learnLanguage("CSS");
// c2.learnLanguage("C++");
// c3.learnLanguage("JAVA");
// console.log(c1.listLanguage());
// console.log(c2.listLanguage());
// console.log(c3.listLanguage());
// console.log(person1);
// console.log(c1);
// console.log(c2);
// console.log(c3);
// person1.exercise();
// person1.fetchJob();

const peopleObject = {
  people: [
    {
      name: "Brad",
      job: "Student",
      age: 25,
      exercise: "Running is terrible!",
    },
  ],
};
console.log(peopleObject.people[0].age);

function fetchJob(i) {
  console.log(
    `${peopleObject.people[i].name} is a ${peopleObject.people[i].job}`
  );
}

fetchJob(0);

console.log(peopleObject.people[0].exercise);

const programmers = {
  programmer: [
    {
      name: "Jeff",
      job: "Back-End",
      busy: true,
      age: 50,
      languages: [],
    },
  ],
  addLanguage: function (x) {
    this.programmer[0].languages.push(x);
    console.log(this.programmer[0].languages);
  },
  listLanguage: function () {
    console.log(this.programmer[0].languages);
  },
  canAcceptTask: function () {
    this.programmer[0].busy = false;
    console.log("I am no longer busy");
  },
  statusCheck: function () {
    if (this.programmer[0].busy != false) {
      console.log("Sorry I am busy and can not help at the moment.");
    } else {
      console.log("Bring me the task, I am ready!!!!!");
    }
  },
};

programmers.addLanguage("js");
programmers.canAcceptTask();
programmers.statusCheck();

// i got this far and realized i was doing it wrong, i am going to be studying and practicing prototypes to be able to convert it over to object prototypes, sorry
