## **JavaScript Loops - Everything You Need to Know (With Real-Life Examples)**  

### **What is a Loop in JavaScript?**
A **loop** is a programming construct that allows you to execute a block of code multiple times until a specified condition is met. Loops help automate repetitive tasks, making your code more efficient and easier to maintain.

For example, if you want to print "Hello, World!" 10 times, instead of writing 10 `console.log()` statements, you can use a loop.

---

## **Types of Loops in JavaScript**
1. **for loop**  
2. **while loop**  
3. **do...while loop**  
4. **for...in loop** (for objects)  
5. **for...of loop** (for arrays and iterables)  

---

## **1. `for` Loop**
The `for` loop is the most commonly used loop in JavaScript. It runs a block of code **a specific number of times**.

### **Syntax:**
```javascript
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```

### **Example: Print numbers 1 to 5**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
### **Real-Life Example: Generating Invoice Numbers**
Imagine you are generating invoice numbers from **1001 to 1010**.
```javascript
for (let invoice = 1001; invoice <= 1010; invoice++) {
    console.log("Invoice Number: " + invoice);
}
```

---

## **2. `while` Loop**
The `while` loop runs **as long as the condition is true**.

### **Syntax:**
```javascript
while (condition) {
    // Code to execute
}
```

### **Example: Print numbers 1 to 5**
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```

### **Real-Life Example: Counting Money in an ATM Machine**
Imagine an ATM is dispensing **$10 bills** until the balance is **$0**.
```javascript
let balance = 50; // $50 available in ATM
while (balance > 0) {
    console.log("Dispensing $10 bill");
    balance -= 10;
}
console.log("No more cash available.");
```

---

## **3. `do...while` Loop**
The `do...while` loop is similar to `while`, but **it always runs at least once** before checking the condition.

### **Syntax:**
```javascript
do {
    // Code to execute
} while (condition);
```

### **Example: Print numbers 1 to 5**
```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```

### **Real-Life Example: Asking for User Input Until Correct**
Imagine asking for a **password** until the user enters the correct one.
```javascript
let correctPassword = "1234";
let userInput;

do {
    userInput = prompt("Enter your password:");
} while (userInput !== correctPassword);

console.log("Access granted!");
```

---

## **4. `for...in` Loop (For Objects)**
The `for...in` loop is used to **iterate over object properties**.

### **Syntax:**
```javascript
for (let key in object) {
    // Code to execute
}
```

### **Example: Loop Through an Object**
```javascript
let person = {
    name: "Shihab",
    age: 25,
    city: "Dhaka"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
```
**Output:**
```
name: Shihab
age: 25
city: Dhaka
```

### **Real-Life Example: Displaying Product Information**
Imagine you have product details stored in an object, and you want to display them.
```javascript
let product = {
    name: "Laptop",
    price: "$1000",
    brand: "HP"
};

for (let key in product) {
    console.log(key + ": " + product[key]);
}
```

---

## **5. `for...of` Loop (For Arrays & Iterables)**
The `for...of` loop is used to iterate over **arrays, strings, or any iterable object**.

### **Syntax:**
```javascript
for (let item of iterable) {
    // Code to execute
}
```

### **Example: Loop Through an Array**
```javascript
let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}
```
**Output:**
```
Red
Green
Blue
```

### **Real-Life Example: Displaying a List of Students**
Imagine you have a list of students and want to display their names.
```javascript
let students = ["Shihab", "Ayesha", "Rahim"];

for (let student of students) {
    console.log("Student: " + student);
}
```

---

## **Loop Control Statements**
- `break` → Stops the loop immediately.  
- `continue` → Skips the current iteration and moves to the next.  

### **Example: Stop Loop When a Certain Condition is Met**
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Stopping loop at 5");
        break;
    }
    console.log(i);
}
```
**Output:**
```
1
2
3
4
Stopping loop at 5
```

### **Example: Skip a Specific Value**
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // Skips 3
    }
    console.log(i);
}
```
**Output:**
```
1
2
4
5
```

---

## **Final Thoughts**
### **Which Loop Should You Use?**
| Loop Type | Best Used For |
|-----------|--------------|
| `for` | When you know the exact number of iterations |
| `while` | When you don’t know the number of iterations in advance |
| `do...while` | When the loop must run at least once |
| `for...in` | When looping over object properties |
| `for...of` | When looping over arrays or iterable objects |

---

## **Conclusion**
JavaScript loops are **essential** for automating repetitive tasks. They make your code more **efficient, cleaner, and easier to manage**. By mastering loops, you can build **dynamic applications, automate workflows, and handle data more effectively**.

Would you like to practice with some real-world coding exercises? 🚀