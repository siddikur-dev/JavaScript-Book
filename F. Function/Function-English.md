# **JavaScript Functions - Everything You Need to Know 🚀**  

A **function** in JavaScript is a block of code that performs a specific task. Functions help in **code reusability, modularity, and better organization**.  

---

## **Why Use Functions?**
✅ **Avoid repetition** – Write once, use multiple times.  
✅ **Organized code** – Break big problems into smaller tasks.  
✅ **Easier debugging** – Fix issues in one place.  
✅ **Improved readability** – Code is easier to understand.  

---

## **How to Declare a Function?**
JavaScript provides different ways to define a function.

### **1️⃣ Function Declaration (Named Function)**
```javascript
function greet() {
    console.log("Hello, Shihab!");
}

greet();  // Output: Hello, Shihab!
```
🔹 **`function`** keyword is used.  
🔹 The function runs only when it is **called**.  

---

### **2️⃣ Function with Parameters & Arguments**
A function can take **parameters** (inputs) to process data.

```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Shihab");  // Output: Hello, Shihab!
greet("Hasan");   // Output: Hello, Hasan!
```
🔹 **`name`** is a **parameter** (like a placeholder).  
🔹 `"Shihab"` and `"Hasan"` are **arguments** (actual values).  

---

### **3️⃣ Function with Return Value**
A function can return a value instead of just printing it.

```javascript
function add(a, b) {
    return a + b;  // Returns the sum of a and b
}

let result = add(10, 20);
console.log(result);  // Output: 30
```
🔹 `return` sends a value back to where the function was called.  

---

### **4️⃣ Function Expression (Anonymous Function)**
A function can be stored inside a variable.

```javascript
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 3));  // Output: 15
```
🔹 **No function name** (anonymous function).  
🔹 Stored inside a variable `multiply`.  

---

### **5️⃣ Arrow Function (ES6)**
A **shorter** and modern way to write functions.

```javascript
const subtract = (a, b) => a - b;

console.log(subtract(10, 5));  // Output: 5
```
🔹 No need for `{}` and `return` if the function has only one line.  

---

### **6️⃣ Default Parameters**
Set default values for parameters.

```javascript
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet();         // Output: Hello, Guest!
greet("Shihab"); // Output: Hello, Shihab!
```
🔹 If no argument is passed, `"Guest"` is used.  

---

### **7️⃣ Rest Parameters (`...`)**
A function can take **multiple arguments** using the `...` operator.

```javascript
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(10, 20, 30));  // Output: 60
console.log(sum(5, 15, 25, 35)); // Output: 80
```
🔹 `...numbers` collects all arguments into an **array**.  

---

## **Function Scope & Hoisting**
### **🔹 Local Scope**
Variables declared inside a function **cannot** be accessed outside.

```javascript
function test() {
    let message = "Hello";
    console.log(message);
}

test(); // Output: Hello
console.log(message); // ❌ Error (message is not defined)
```

---

### **🔹 Global Scope**
A variable declared outside a function is **global** and can be used anywhere.

```javascript
let message = "Hello";

function test() {
    console.log(message);
}

test(); // Output: Hello
console.log(message); // Output: Hello
```

---

### **🔹 Hoisting**
Function **declarations** are **hoisted** (moved to the top) and can be used before defining them.

```javascript
sayHello();

function sayHello() {
    console.log("Hello, World!");
}

// Output: Hello, World!
```

🔹 Function **expressions & arrow functions are NOT hoisted**:
```javascript
console.log(add(5, 3)); // ❌ Error (Cannot access 'add' before initialization)

const add = (a, b) => a + b;
```

---

## **Callback Functions**
A function that is passed as an **argument** to another function.

```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Shihab", sayGoodbye);

// Output:
// Hello, Shihab
// Goodbye!
```

🔹 **Used in async operations like fetching data, handling events, etc.**  

---

## **IIFE (Immediately Invoked Function Expression)**
A function that runs **immediately** after definition.

```javascript
(function() {
    console.log("This function runs automatically!");
})();
```

🔹 **Used to avoid polluting the global scope.**  

---

## **Higher-Order Functions**
Functions that take **another function as an argument** or **return a function**.

```javascript
function applyOperation(a, b, operation) {
    return operation(a, b);
}

function multiply(x, y) {
    return x * y;
}

console.log(applyOperation(5, 3, multiply));  // Output: 15
```

🔹 **Used in map, filter, reduce, event listeners, and promises.**  

---

## **Real-Life Examples of Functions**
### **1️⃣ Generating a Random OTP (One-Time Password)**
```javascript
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

console.log("Your OTP is: " + generateOTP());
```

---

### **2️⃣ Checking if a Number is Even or Odd**
```javascript
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10)); // Output: true
console.log(isEven(7));  // Output: false
```

---

### **3️⃣ Fetching Data from an API (Async Function)**
```javascript
async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}

fetchData();
```
🔹 **Uses `fetch()` to get data from an API.**  

---

## **Practice Questions**
### **1️⃣ Write a function to find the factorial of a number.**
```javascript
function factorial(n) {
    // Your code here
}
```

### **2️⃣ Write a function to reverse a string.**
```javascript
function reverseString(str) {
    // Your code here
}
```

### **3️⃣ Write a function that checks if a number is prime.**
```javascript
function isPrime(num) {
    // Your code here
}
```

---

## **Conclusion**
✅ Functions **make code reusable and modular**.  
✅ Use **function declarations, expressions, and arrow functions**.  
✅ **Use parameters, return values, and default values** for flexibility.  
✅ **Callbacks, IIFE, and higher-order functions** are powerful tools.  
✅ **Practice functions to become a pro! 🚀**  