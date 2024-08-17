import { useState } from "react";

const JsTutorial = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const jsTopics = [
    {
      id: 1,
      title: "JavaScript Introduction",
      definition:
        "JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.",
      syntax: "// This is a JavaScript comment\nconsole.log('Hello, World!');",
      example: "console.log('Welcome to JavaScript!');",
      output: "Welcome to JavaScript!",
      explanation:
        "This example uses console.log() to print a message. In a web browser, this would appear in the developer console.",
    },
    {
      id: 2,
      title: "Variables",
      definition: "Variables are containers for storing data values.",
      syntax: "let variableName = value;",
      example:
        "let name = 'John';\nlet age = 30;\nconsole.log(name + ' is ' + age + ' years old.');",
      output: "John is 30 years old.",
      explanation:
        "We declare variables using 'let', assign them values, and then use them in a string concatenation.",
    },
    {
      id: 3,
      title: "Data Types",
      definition:
        "JavaScript has several data types including String, Number, Boolean, Array, and Object.",
      syntax:
        "let stringVar = 'Hello';\nlet numberVar = 42;\nlet booleanVar = true;",
      example:
        "let fruit = 'apple';\nlet count = 5;\nlet isRed = true;\nconsole.log(typeof fruit, typeof count, typeof isRed);",
      output: "string number boolean",
      explanation:
        "We create variables of different types and use the 'typeof' operator to check their types.",
    },
    {
      id: 4,
      title: "Functions",
      definition:
        "Functions are reusable blocks of code that perform a specific task.",
      syntax:
        "function functionName(parameters) {\n  // code to be executed\n}",
      example:
        "function greet(name) {\n  return 'Hello, ' + name + '!';\n}\nconsole.log(greet('Alice'));",
      output: "Hello, Alice!",
      explanation:
        "We define a function 'greet' that takes a 'name' parameter and returns a greeting. We then call this function with 'Alice' as the argument.",
    },
    {
      id: 5,
      title: "Conditional Statements",
      definition:
        "Conditional statements are used to perform different actions based on different conditions.",
      syntax:
        "if (condition) {\n  // code if true\n} else {\n  // code if false\n}",
      example:
        "let age = 18;\nif (age >= 18) {\n  console.log('You can vote!');\n} else {\n  console.log('You cannot vote yet.');\n}",
      output: "You can vote!",
      explanation:
        "We use an if-else statement to check if 'age' is 18 or older. Since it's 18, the condition is true, and 'You can vote!' is logged.",
    },
    {
      id: 6,
      title: "Let vs Var vs Const",
      definition:
        "Different ways to declare variables in JavaScript, each with its own scope and mutability rules.",
      syntax: "let x = 1;\nvar y = 2;\nconst z = 3;",
      example:
        "let x = 1;\nx = 2; // OK\n\nconst y = 1;\n// y = 2; // Error\n\nif (true) {\n  var z = 3;\n}\nconsole.log(z); // 3 (var is function-scoped)",
      output: "No output (demonstrating behavior)",
      explanation:
        "let allows reassignment and is block-scoped. const creates a read-only reference and is block-scoped. var is function-scoped and can be redeclared.",
    },
    {
      id: 7,
      title: "Objects",
      definition:
        "Objects are collections of key-value pairs, used to store multiple related properties and methods.",
      syntax: "let obj = {\n  key1: value1,\n  key2: value2\n};",
      example:
        "let person = {\n  name: 'John',\n  age: 30,\n  greet: function() {\n    console.log('Hello, ' + this.name);\n  }\n};\n\nconsole.log(person.name);\nperson.greet();",
      output: "John\nHello, John",
      explanation:
        "We create an object 'person' with properties 'name' and 'age', and a method 'greet'. We access properties using dot notation and call the method.",
    },
    {
      id: 8,
      title: "Operators",
      definition:
        "Symbols that perform operations on operands (values and variables).",
      syntax: "let result = operand1 operator operand2;",
      example:
        "let x = 5;\nlet y = 2;\nconsole.log(x + y);  // Addition\nconsole.log(x * y);  // Multiplication\nconsole.log(x > y);  // Comparison",
      output: "7\n10\ntrue",
      explanation:
        "We use arithmetic operators (+, *) to perform calculations and a comparison operator (>) to compare values.",
    },
    {
      id: 9,
      title: "Strings and Their Methods",
      definition:
        "Strings are sequences of characters. JavaScript provides various methods to manipulate strings.",
      syntax: "let str = 'Hello';\nstr.method();",
      example:
        "let str = 'Hello, World!';\nconsole.log(str.length);\nconsole.log(str.toUpperCase());\nconsole.log(str.split(', '));",
      output: "13\nHELLO, WORLD!\n['Hello', 'World!']",
      explanation:
        "We use string methods: length to get string length, toUpperCase() to convert to uppercase, and split() to split the string into an array.",
    },
    {
      id: 10,
      title: "Numbers and Their Methods",
      definition:
        "Numbers in JavaScript can be integers or floating-point. There are several methods available for number manipulation.",
      syntax: "let num = 123.456;\nnum.method();",
      example:
        "let num = 123.456;\nconsole.log(num.toFixed(2));\nconsole.log(Math.round(num));\nconsole.log(Math.floor(num));",
      output: "123.46\n123\n123",
      explanation:
        "We use toFixed() to format to 2 decimal places, Math.round() to round to the nearest integer, and Math.floor() to round down to the nearest integer.",
    },
    {
      id: 11,
      title: "Arrays",
      definition:
        "Arrays are used to store multiple values in a single variable.",
      syntax: "let arr = [value1, value2, ...];",
      example:
        "let fruits = ['apple', 'banana', 'orange'];\nconsole.log(fruits.length);\nconsole.log(fruits[1]);\nfruits.push('grape');\nconsole.log(fruits);",
      output: "3\nbanana\n['apple', 'banana', 'orange', 'grape']",
      explanation:
        "We create an array 'fruits', access its length and elements, and use the push() method to add a new element to the end.",
    },
    {
      id: 12,
      title: "If-Else Statements",
      definition:
        "If-else statements allow you to execute different code blocks based on different conditions.",
      syntax:
        "if (condition1) {\n  // code\n} else if (condition2) {\n  // code\n} else {\n  // code\n}",
      example:
        "let num = 0;\nif (num > 0) {\n  console.log('Positive');\n} else if (num < 0) {\n  console.log('Negative');\n} else {\n  console.log('Zero');\n}",
      output: "Zero",
      explanation:
        "We use an if-else if-else statement to check if a number is positive, negative, or zero. Since num is 0, the last condition is met.",
    },
    {
      id: 13,
      title: "Loops",
      definition: "Loops are used to repeat a block of code multiple times.",
      syntax:
        "for (initialization; condition; increment) {\n  // code to be repeated\n}",
      example:
        "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n\nlet arr = ['a', 'b', 'c'];\nfor (let item of arr) {\n  console.log(item);\n}",
      output: "0\n1\n2\na\nb\nc",
      explanation:
        "We use a for loop to iterate 3 times, logging the counter. Then we use a for...of loop to iterate over an array, logging each element.",
    },

    {
      id: 14,
      title: "For...In Loop",
      definition:
        "The for...in loop iterates over the properties of an object.",
      syntax: "for (var prop in obj) {\n  // code\n}",
      example:
        "let person = {name: 'John', age: 30, city: 'New York'};\nfor (let prop in person) {\n  console.log(`${prop}: ${person[prop]}`);\n}",
      output: "name: John\nage: 30\ncity: New York",
      explanation:
        "We use a for...in loop to iterate over the properties of an object and log each property and its value.",
    },
    {
      id: 15,
      title: "For...Each Loop",
      definition: "The for...each loop iterates over an array or an object.",
      syntax: "arr.forEach((element) => {\n  // code\n});",
      example:
        "let fruits = ['apple', 'banana', 'orange'];\nfruits.forEach((fruit) => {\n  console.log(fruit);\n});",
      output: "apple\nbanana\norange",
      explanation:
        "We use a for...each loop to iterate over an array and log each element.",
    },
    {
      id: 16,
      title: "Switch Statement",
      definition:
        "The switch statement executes different blocks of code based on different conditions.",
      syntax:
        "switch (expression) {\n  case value1:\n    // code\n    break;\n  case value2:\n    // code\n    break;\n  default:\n    // code\n}",
      example:
        "let day = 2;\nswitch (day) {\n  case 1:\n    console.log('Monday');\n    break;\n  case 2:\n    console.log('Tuesday');\n    break;\n  default:\n    console.log('Another day');\n}",
      output: "Tuesday",
      explanation:
        "We use a switch statement to execute different blocks of code based on the value of a variable.",
    },
    {
      id: 17,
      title: "Break Statement",
      definition: "The break statement jumps out of a loop or a switch.",
      syntax: "break;",
      example:
        "for (let i = 0; i < 5; i++) {\n  if (i === 3) break;\n  console.log(i);\n}",
      output: "0\n1\n2",
      explanation: "We use a break statement to exit a loop early.",
    },
    {
      id: 18,
      title: "Date",
      definition: "The Date object represents a moment in time.",
      syntax: "let date = new Date();",
      example: "let date = new Date();\nconsole.log(date);",
      output: "Current Date and Time",
      explanation:
        "We create a new Date object to represent the current date and time.",
    },
    {
      id: 19,
      title: "Sets",
      definition: "Sets are collections of unique values.",
      syntax: "let set = new Set([value1, value2, ...]);",
      example:
        "let set = new Set(['apple', 'banana', 'apple']);\nconsole.log(set);",
      output: "Set(2) {'apple', 'banana'}",
      explanation: "We create a Set to store unique values.",
    },
    {
      id: 20,
      title: "Maps",
      definition: "Maps are collections of key-value pairs.",
      syntax: "let map = new Map([[key1, value1], [key2, value2], ...]);",
      example:
        "let map = new Map([['name', 'John'], ['age', 30]]);\nconsole.log(map);",
      output: "Map(2) {'name' => 'John', 'age' => 30}",
      explanation: "We create a Map to store key-value pairs.",
    },
    {
      id: 21,
      title: "JSON",
      definition: "JSON (JavaScript Object Notation) is a data format.",
      syntax: "let data = JSON.parse(jsonString);",
      example:
        'let jsonString = \'{"name":"John","age":30}\';\nlet data = JSON.parse(jsonString);\nconsole.log(data);',
      output: "{name: 'John', age: 30}",
      explanation: "We parse a JSON string into a JavaScript object.",
    },
    {
      id: 22,
      title: "Fetch",
      definition: "Fetch is used to make HTTP requests.",
      syntax:
        "fetch(url).then(response => response.json()).then(data => console.log(data));",
      example:
        "fetch('https://api.example.com/data').then(response => response.json()).then(data => console.log(data));",
      output: "Data from the API",
      explanation:
        "We use fetch to make a GET request to an API and log the response data.",
    },
    {
      id: 23,
      title: "Destructuring",
      definition:
        "Destructuring is a way to extract data from arrays or objects.",
      syntax: "let { prop1, prop2 } = obj;",
      example:
        "let person = {name: 'John', age: 30};\nlet { name, age } = person;\nconsole.log(name, age);",
      output: "John 30",
      explanation: "We use destructuring to extract properties from an object.",
    },
    {
      id: 24,
      title: "DOM",
      definition:
        "The Document Object Model (DOM) represents the structure of a document.",
      syntax: "document.getElementById('id').innerHTML = 'New content';",
      example: "document.getElementById('example').innerHTML = 'New content';",
      output: "New content",
      explanation:
        "We use the DOM to dynamically change the content of an HTML element.",
    },
    {
      id: 25,
      title: "Events",
      definition: "Events are triggered by user interactions or other actions.",
      syntax: "element.addEventListener('event', function() {\n  // code\n});",
      example:
        "document.getElementById('button').addEventListener('click', function() {\n  console.log('Button clicked');\n});",
      output: "Button clicked",
      explanation:
        "We add an event listener to an element to execute code when an event occurs.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">
          JavaScript Topics
        </h2>
        <ul className="space-y-2">
          {jsTopics.map((topic) => (
            <li
              key={topic.id}
              className={`cursor-pointer p-2 rounded-md transition-colors duration-200 ${
                selectedTopic === topic.id
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-700 hover:bg-yellow-600 hover:text-white"
              }`}
              onClick={() => setSelectedTopic(topic.id)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-8">
        {selectedTopic && jsTopics[selectedTopic - 1] ? (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-yellow-500">
              {jsTopics[selectedTopic - 1].title}
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                What is it?
              </h3>
              <p className="text-gray-300">
                {jsTopics[selectedTopic - 1].definition}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                How to write it:
              </h3>
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code className="text-green-400">
                  {jsTopics[selectedTopic - 1].syntax}
                </code>
              </pre>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Here's an example:
              </h3>
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code className="text-blue-400">
                  {jsTopics[selectedTopic - 1].example}
                </code>
              </pre>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Output:
              </h3>
              <div className="bg-white text-black p-4 rounded-md">
                {jsTopics[selectedTopic - 1].output}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Let's break it down:
              </h3>
              <p className="text-gray-300">
                {jsTopics[selectedTopic - 1].explanation}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center text-2xl text-gray-500">
            Ready to learn JavaScript? Pick a topic from the menu and let's get
            started!
          </div>
        )}
      </div>
    </div>
  );
};

export default JsTutorial;
