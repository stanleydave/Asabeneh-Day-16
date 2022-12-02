// level 1
// que 1
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let skillsJson = JSON.stringify(skills);
console.log(skills);

// que 2
console.log("\n");
let age = 250;
let ageJson = JSON.stringify(age);
console.log(age);

// que 3
console.log("\n");
let isMarried = true;
let married = JSON.stringify(isMarried);
console.log(married);

// que 4
console.log("\n");
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
let studentJson = JSON.stringify(student, undefined, 4);
console.log(studentJson);

// level 2
console.log("\n");
let student2 = JSON.stringify(student, ["firstName", "lastName", "skills"], 3);
console.log(student2);

// level 3
// que 1
console.log("\n");
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`;
let parse = JSON.parse(txt);
console.log(parse);

// // que 2
console.log("\n");

function mostSkilled() {
  let mostSkilled = "";
  for (let elem in parse) {
    if (parse[elem]["skills"].length > mostSkilled.length) {
      mostSkilled = elem;
    }
  }
  return mostSkilled;
}
console.log(mostSkilled());