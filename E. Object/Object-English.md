# **JavaScript Objects - Everything You Need to Know (With Real-Life Examples)**  

## **What is an Object in JavaScript?**  
An **object** in JavaScript is a collection of **key-value pairs**. It is used to store multiple related values under a single variable name.  

### **Why Use Objects?**  
- Objects allow us to **group related data** together.  
- Objects make it easy to **organize, access, and modify** data.  
- Unlike arrays, which store values **in an ordered list**, objects use **named properties** to store values.  

---

## **How to Create an Object?**  

### **1️⃣ Using Object Literal `{}`**
The easiest way to create an object is using curly braces `{}`.  
```javascript
let person = {
    name: "Shihab",
    age: 25,
    city: "Dhaka"
};

console.log(person);  // Output: { name: 'Shihab', age: 25, city: 'Dhaka' }
```
🔹 Here, `name`, `age`, and `city` are **keys (properties)**, and `"Shihab"`, `25`, and `"Dhaka"` are **values**.  

---

### **2️⃣ Using `new Object()` (Less Common)**
```javascript
let person = new Object();
person.name = "Shihab";
person.age = 25;
person.city = "Dhaka";

console.log(person);
```
🔹 This method is less common and generally not recommended unless needed.

---

## **Accessing Object Properties**
You can access object properties in two ways:  

### **1️⃣ Dot Notation (`object.property`)**
```javascript
console.log(person.name);  // Output: Shihab
console.log(person.age);   // Output: 25
```

### **2️⃣ Bracket Notation (`object["property"]`)**
```javascript
console.log(person["city"]);  // Output: Dhaka
```
🔹 **Use bracket notation** when the property name contains **spaces or special characters**.

Example:
```javascript
let user = {
    "full name": "Shihab Hasan",
    age: 25
};

console.log(user["full name"]);  // Output: Shihab Hasan
```

---

## **Modifying Object Properties**
You can **update** or **add** properties to an object.

### **Updating Existing Property**
```javascript
person.age = 26;
console.log(person.age);  // Output: 26
```

### **Adding a New Property**
```javascript
person.country = "Bangladesh";
console.log(person.country);  // Output: Bangladesh
```

### **Deleting a Property**
```javascript
delete person.city;
console.log(person.city);  // Output: undefined
```

---

## **Looping Through an Object**
Use a **`for...in` loop** to iterate over an object’s properties.

```javascript
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023
};

for (let key in car) {
    console.log(key + ": " + car[key]);
}
```
🔹 **Output:**
```
brand: Toyota
model: Corolla
year: 2023
```

---

## **Object Methods (Functions Inside Objects)**
A **method** is a function stored inside an object.

```javascript
let person = {
    name: "Shihab",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();  // Output: Hello, my name is Shihab
```
🔹 **`this` refers to the object itself** and helps access its properties.

---

## **Checking if a Property Exists**
Use the **`in` operator** or **`hasOwnProperty()`** to check if a property exists.

```javascript
console.log("age" in person);  // Output: true
console.log(person.hasOwnProperty("city"));  // Output: false
```

---

## **Real-Life Examples of Objects**
### **1️⃣ Storing User Information**
```javascript
let user = {
    username: "shihab123",
    email: "shihab@example.com",
    password: "securepass",
    isLoggedIn: false
};
console.log(user);
```

---

### **2️⃣ Representing a Bank Account**
```javascript
let bankAccount = {
    accountNumber: "123456789",
    balance: 5000,
    deposit: function(amount) {
        this.balance += amount;
        console.log("Deposited: $" + amount);
        console.log("New Balance: $" + this.balance);
    },
    withdraw: function(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log("Withdrawn: $" + amount);
            console.log("New Balance: $" + this.balance);
        }
    }
};

bankAccount.deposit(1000);
bankAccount.withdraw(2000);
```

---

### **3️⃣ Storing Product Details (E-commerce Example)**
```javascript
let product = {
    name: "Laptop",
    brand: "HP",
    price: 800,
    inStock: true,
    showDetails: function() {
        console.log(this.name + " by " + this.brand + " costs $" + this.price);
    }
};

product.showDetails();  // Output: Laptop by HP costs $800
```

---

### **4️⃣ Employee Database Example**
```javascript
let employees = [
    { name: "John", position: "Manager", salary: 5000 },
    { name: "Jane", position: "Developer", salary: 4000 },
    { name: "Mike", position: "Designer", salary: 3500 }
];

for (let employee of employees) {
    console.log(employee.name + " works as a " + employee.position);
}
```
🔹 **Output:**
```
John works as a Manager
Jane works as a Developer
Mike works as a Designer
```

---

## **Nested Objects (Object Inside Another Object)**
Objects can contain other objects.

```javascript
let person = {
    name: "Shihab",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(person.address.city);  // Output: Dhaka
```

---

## **Object Destructuring**
Extract values from an object easily.

```javascript
let student = {
    name: "Shihab",
    age: 25,
    grade: "A"
};

let { name, age } = student;
console.log(name);  // Output: Shihab
console.log(age);   // Output: 25
```

---

## **Object.keys(), Object.values(), Object.entries()**
### **1️⃣ `Object.keys()` - Get All Property Names**
```javascript
let person = { name: "Shihab", age: 25, city: "Dhaka" };
console.log(Object.keys(person));  
// Output: [ 'name', 'age', 'city' ]
```

### **2️⃣ `Object.values()` - Get All Property Values**
```javascript
console.log(Object.values(person));  
// Output: [ 'Shihab', 25, 'Dhaka' ]
```

### **3️⃣ `Object.entries()` - Get Key-Value Pairs as an Array**
```javascript
console.log(Object.entries(person));  
// Output: [ ['name', 'Shihab'], ['age', 25], ['city', 'Dhaka'] ]
```

---

## **Conclusion**
- Objects store **key-value** pairs.
- You can access properties using **dot notation** or **bracket notation**.
- Objects can have **methods (functions inside objects)**.
- You can loop through an object using **`for...in`**.
- Use **destructuring** and **built-in methods** (`Object.keys()`, `Object.values()`) for easier manipulation.

Would you like some practice problems on objects? 🚀🔥