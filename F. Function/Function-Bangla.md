# 🚀 **JavaScript Function: A Complete Guide with Real Examples**  

## **📌 Function কি?**  
একটি **Function** হলো কোডের একটি ব্লক যা নির্দিষ্ট কাজ সম্পন্ন করতে বারবার ব্যবহার করা যায়। এটি কোডকে **Reusable** এবং **Modular** করে।  

---

## **📌 Function লেখার নিয়ম (Syntax)**  
```js
function functionName(parameters) {
    // Function Body (কোড লিখতে হবে)
    return result; // (Optional)
}
```
**🔹 `functionName`** → ফাংশনের নাম  
**🔹 `parameters`** → ইনপুট হিসেবে নেওয়া ডাটা (Optional)  
**🔹 `return`** → আউটপুট রিটার্ন করা হয় (Optional)  

---

## **📌 ১. Simple Function Example (ফাংশন ডিফাইন ও কল করা)**  
```js
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}
greet(); // Function Call
```
**✅ Output:**  
```
Hello, Welcome to JavaScript!
```

---

## **📌 ২. Function with Parameters (Argument নেয়া ফাংশন)**
```js
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); 
```
**✅ Output:**  
```
8
```

---

## **📌 ৩. Function with Default Parameter**
```js
function multiply(a, b = 2) { // Default value 2
    return a * b;
}
console.log(multiply(5)); // 5 * 2 = 10
console.log(multiply(5, 3)); // 5 * 3 = 15
```
**✅ Output:**  
```
10
15
```

---

## **📌 ৪. Function Expression (Anonymous Function)**
```js
const divide = function(a, b) {
    return a / b;
};
console.log(divide(10, 2)); // 5
```
**✅ Output:**  
```
5
```

---

## **📌 ৫. Arrow Function (ES6)**
```js
const square = (num) => num * num;
console.log(square(4)); // 16
```
**✅ Output:**  
```
16
```

---

## **📌 ৬. Immediately Invoked Function Expression (IIFE)**
```js
(function() {
    console.log("IIFE Executed!");
})();
```
**✅ Output:**  
```
IIFE Executed!
```

---

## **📌 ৭. Function with Rest Parameters**
```js
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
```
**✅ Output:**  
```
15
```

---

## **📌 ৮. Callback Function (Function as an Argument)**
```js
function processUserInput(name, callback) {
    console.log("User Name:", name);
    callback();
}

function sayHello() {
    console.log("Hello, How are you?");
}

processUserInput("Shihab", sayHello);
```
**✅ Output:**  
```
User Name: Shihab
Hello, How are you?
```

---

## **📌 ৯. Higher Order Function (Function Returns Another Function)**
```js
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10
```
**✅ Output:**  
```
10
```

---

## **📌 ১০. Recursive Function (Self Calling Function)**
```js
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 5! = 5*4*3*2*1 = 120
```
**✅ Output:**  
```
120
```

---

## **📌 ১১. Function Inside an Object (Method)**
```js
const person = {
    name: "Shihab",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet();
```
**✅ Output:**  
```
Hello, Shihab
```

---

## **📌 ১২. Asynchronous Function (Async/Await)**
```js
async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
}
fetchData();
```
**✅ Output:**  
```json
{ "userId": 1, "id": 1, "title": "sample title", "body": "sample body text..." }
```

---

### **🚀 শেষ কথা:**  
✅ Function হলো **JavaScript-এর মূল ভিত্তি**।  
✅ এটি **কোড Reusability ও Maintainability** বাড়ায়।  
✅ **Callback, Higher Order Function, Recursion** ইত্যাদি শিখলে JavaScript-এ দক্ষ হওয়া সহজ হবে!  